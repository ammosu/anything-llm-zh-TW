import { CloudArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import showToast from "../../../../../utils/toast";
import System from "../../../../../models/system";
import { useDropzone } from "react-dropzone";
import { v4 } from "uuid";
import FileUploadProgress from "./FileUploadProgress";
import Workspace from "../../../../../models/workspace";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";

export default function UploadFile({
  workspace,
  fetchKeys,
  setLoading,
  setLoadingMessage,
}) {
  const { t } = useTranslation();
  const [ready, setReady] = useState(false);
  const [files, setFiles] = useState([]);
  const [fetchingUrl, setFetchingUrl] = useState(false);

  const handleSendLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage(t("uploadFile.scrapingLink"));
    setFetchingUrl(true);
    const formEl = e.target;
    const form = new FormData(formEl);
    const { response, data } = await Workspace.uploadLink(
      workspace.slug,
      form.get("link")
    );
    if (!response.ok) {
      showToast(t("uploadFile.uploadLinkError", { error: data.error }), "error");
    } else {
      fetchKeys(true);
      showToast(t("uploadFile.uploadLinkSuccess"), "success");
      formEl.reset();
    }
    setLoading(false);
    setFetchingUrl(false);
  };

  // Don't spam fetchKeys, wait 1s between calls at least.
  const handleUploadSuccess = debounce(() => fetchKeys(true), 1000);
  const handleUploadError = (_msg) => null; // stubbed.

  const onDrop = async (acceptedFiles, rejections) => {
    const newAccepted = acceptedFiles.map((file) => {
      return {
        uid: v4(),
        file,
      };
    });
    const newRejected = rejections.map((file) => {
      return {
        uid: v4(),
        file: file.file,
        rejected: true,
        reason: file.errors[0].code,
      };
    });
    setFiles([...newAccepted, ...newRejected]);
  };

  useEffect(() => {
    async function checkProcessorOnline() {
      const online = await System.checkDocumentProcessorOnline();
      setReady(online);
    }
    checkProcessorOnline();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled: !ready,
  });

  return (
    <div>
      <div
        className={`w-[560px] border-dashed border-[2px] border-theme-modal-border rounded-2xl transition-colors duration-300 p-3 ${
          ready
            ? "bg-theme-bg-container hover:bg-gray-50/10 cursor-pointer" 
            : "bg-gray-100/10 cursor-not-allowed" 
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {ready === false ? (
          <div className="flex flex-col items-center justify-center h-full">
            <CloudArrowUp className="w-8 h-8 text-gray-600" />
            <div className="text-gray-700 text-sm font-semibold py-1">
              {t("uploadFile.documentProcessorUnavailable")}
            </div>
            <div className="text-gray-600 text-xs font-medium py-1 px-20 text-center">
              {t("uploadFile.uploadUnavailableMessage")}
            </div>
          </div>
        ) : files.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <CloudArrowUp className="w-8 h-8 text-gray-600" />
            <div className="text-gray-700 text-sm font-semibold py-1">
              {t("uploadFile.clickToUpload")}
            </div>
            <div className="text-gray-600 text-xs font-medium py-1">
              {t("uploadFile.supportMessage")}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 overflow-auto max-h-[180px] p-1">
            {files.map((file) => (
              <FileUploadProgress
                key={file.uid}
                file={file.file}
                uuid={file.uid}
                setFiles={setFiles}
                slug={workspace.slug}
                rejected={file?.rejected}
                reason={file?.reason}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
                setLoading={setLoading}
                setLoadingMessage={setLoadingMessage}
              />
            ))}
          </div>
        )}
      </div>
      <div className="text-center text-gray-500 text-xs font-medium w-[560px] py-2">
        {t("uploadFile.submitLink")}
      </div>
      <form onSubmit={handleSendLink} className="flex gap-x-2">
        <input
          disabled={fetchingUrl}
          name="link"
          type="url"
          className="border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 disabled:bg-gray-100 disabled:text-gray-500"
          placeholder={t("uploadFile.placeholderUrl")}
          autoComplete="off"
        />
        <button
          disabled={fetchingUrl}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-auto border border-transparent text-sm px-4 py-2.5 rounded-lg disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {fetchingUrl ? t("uploadFile.fetching") : t("uploadFile.fetchWebsite")}
        </button>
      </form>
      <div className="mt-6 text-center text-gray-600 text-xs font-medium w-[560px]">
        {t("uploadFile.disclaimer")}
      </div>
    </div>
   );
}
