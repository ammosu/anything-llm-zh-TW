import { useEffect, useRef, useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { Trash } from "@phosphor-icons/react";
import { userFromStorage } from "@/utils/request";
import System from "@/models/system";
import { useTranslation } from "react-i18next";

export default function ApiKeyRow({ apiKey }) {
  const { t } = useTranslation();
  const rowRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const handleDelete = async () => {
    if (
      !window.confirm(
        t(
          "apiKey.confirmDelete",
          "Are you sure you want to deactivate this API key?\nAfter you do this it will no longer be usable.\n\nThis action is irreversible."
        )
      )
    )
      return false;
    if (rowRef?.current) {
      rowRef.current.remove();
    }

    const user = userFromStorage();
    const Model = !!user ? Admin : System;
    await Model.deleteApiKey(apiKey.id);
    showToast(t("apiKey.deletedMessage", "API Key permanently deleted"), "info");
  };

  const copyApiKey = () => {
    if (!apiKey) return false;
    window.navigator.clipboard.writeText(apiKey.secret);
    showToast(t("apiKey.copiedMessage", "API Key copied to clipboard"), "success");
    setCopied(true);
  };

  useEffect(() => {
    function resetStatus() {
      if (!copied) return false;
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    resetStatus();
  }, [copied]);

  return (
    <>
      <tr
        ref={rowRef}
        className="bg-transparent text-white text-opacity-80 text-sm font-medium"
      >
        <td scope="row" className="px-6 py-4 whitespace-nowrap">
          {apiKey.secret}
        </td>
        <td className="px-6 py-4 text-center">
          {apiKey.createdBy?.username || t("apiKey.anonymousUser", "--")}
        </td>
        <td className="px-6 py-4">{apiKey.createdAt}</td>
        <td className="px-6 py-4 flex items-center gap-x-6">
          <button
            onClick={copyApiKey}
            disabled={copied}
            className="border-none font-medium text-blue-300 rounded-lg hover:text-white hover:light:text-blue-500 hover:text-opacity-60 hover:underline"
          >
            {copied ? t("apiKey.copied", "Copied") : t("apiKey.copy", "Copy API Key")}
          </button>
          <button
            onClick={handleDelete}
            className="border-none font-medium px-2 py-1 rounded-lg text-theme-text-primary hover:text-red-500"
          >
            <Trash className="h-5 w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
