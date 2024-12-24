import React, { useState, useEffect, memo } from "react";
import truncate from "truncate";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import Workspace from "../../../../../../models/workspace";
import { humanFileSize, milliToHms } from "../../../../../../utils/numbers";
import PreLoader from "../../../../../Preloader";
import { useTranslation } from "react-i18next";

function FileUploadProgressComponent({
  slug,
  uuid,
  file,
  setFiles,
  rejected = false,
  reason = null,
  onUploadSuccess,
  onUploadError,
  setLoading,
  setLoadingMessage,
}) {
  const { t } = useTranslation();
  const [timerMs, setTimerMs] = useState(10);
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // 处理淡出动画
  const fadeOut = (cb) => {
    setIsFadingOut(true);
    cb?.();
  };

  // 移除文件组件
  const beginFadeOut = () => {
    setIsFadingOut(false);
    setFiles((prev) => {
      return prev.filter((item) => item.uid !== uuid);
    });
  };

  // 获取基于状态的样式类名
  const getStatusClasses = () => {
    const baseClasses = "relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg transition-all duration-300";
    
    if (rejected || status === "failed") {
      return `${baseClasses} bg-red-500/10 border border-red-200 dark:border-red-800`;
    }
    
    if (status === "complete") {
      return `${baseClasses} bg-green-500/10 border border-green-200 dark:border-green-800`;
    }

    return `${baseClasses} bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700`;
  };

  // 获取图标样式
  const getIconClasses = () => {
    if (rejected || status === "failed") {
      return "text-red-500 dark:text-red-400";
    }
    if (status === "complete") {
      return "text-green-500 dark:text-green-400";
    }
    return "text-gray-500 dark:text-gray-400";
  };

  // 文件上传处理
  useEffect(() => {
    async function uploadFile() {
      if (!file || rejected) return;

      setLoading(true);
      setLoadingMessage(t("uploadFile.uploading"));
      const start = Number(new Date());
      const formData = new FormData();
      formData.append("file", file, file.name);

      // 计时器
      const timer = setInterval(() => {
        setTimerMs(Number(new Date()) - start);
      }, 100);

      try {
        const { response, data } = await Workspace.uploadFile(slug, formData);
        if (!response.ok) {
          setStatus("failed");
          setError(data.error);
          onUploadError(data.error);
        } else {
          setStatus("complete");
          onUploadSuccess();
        }
      } catch (err) {
        setStatus("failed");
        setError(t("uploadFile.uploadError"));
        onUploadError(t("uploadFile.uploadError"));
      } finally {
        setLoading(false);
        setLoadingMessage("");
        clearInterval(timer);

        // 5秒后开始淡出
        setTimeout(() => {
          fadeOut(() => setTimeout(() => beginFadeOut(), 300));
        }, 5000);
      }
    }

    uploadFile();
  }, []);

  // 进度条组件
  const ProgressBar = () => (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-b-lg overflow-hidden">
      <div 
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${uploadProgress}%` }}
      />
    </div>
  );

  // 错误状态渲染
  if (rejected || status === "failed") {
    return (
      <div className={`${getStatusClasses()} ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
        <div className="w-6 h-6 flex-shrink-0">
          <XCircle className={`w-6 h-6 ${getIconClasses()}`} />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
            {truncate(file.name, 30)}
          </p>
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {reason || error || t("uploadFile.uploadError")}
          </p>
        </div>
      </div>
    );
  }

  // 常规状态渲染
  return (
    <div className={`${getStatusClasses()} ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
      <div className="w-6 h-6 flex-shrink-0">
        {status !== "complete" ? (
          <div className="flex items-center justify-center">
            <PreLoader size="6" className={getIconClasses()} />
          </div>
        ) : (
          <CheckCircle className={`w-6 h-6 ${getIconClasses()}`} />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
          {truncate(file.name, 30)}
        </p>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {humanFileSize(file.size)} | {milliToHms(timerMs)}
        </p>
      </div>
      {status !== "complete" && <ProgressBar />}
    </div>
  );
}

export default memo(FileUploadProgressComponent);
