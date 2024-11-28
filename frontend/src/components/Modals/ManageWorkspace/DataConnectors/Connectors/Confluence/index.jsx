import { useState } from "react";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { Warning } from "@phosphor-icons/react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

export default function ConfluenceOptions() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      setLoading(true);
      showToast(
        t("dataConnectors.confluence.toastFetchingPages"),
        "info",
        {
          clear: true,
          autoClose: false,
        }
      );
      const { data, error } = await System.dataConnectors.confluence.collect({
        baseUrl: form.get("baseUrl"),
        spaceKey: form.get("spaceKey"),
        username: form.get("username"),
        accessToken: form.get("accessToken"),
        cloud: form.get("isCloud") === "true",
      });

      if (!!error) {
        showToast(error, "error", { clear: true });
        setLoading(false);
        return;
      }

      showToast(
        t("dataConnectors.confluence.toastPagesCollected", {
          spaceKey: data.spaceKey,
          destination: data.destination,
        }),
        "success",
        { clear: true }
      );
      e.target.reset();
      setLoading(false);
    } catch (e) {
      console.error(e);
      showToast(e.message, "error", { clear: true });
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full px-1 md:pb-6 pb-16">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col py-2">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold flex gap-x-2 items-center">
                    <p className="font-bold text-theme-text-primary">
                      {t("dataConnectors.confluence.deploymentType")}
                    </p>
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    {t("dataConnectors.confluence.deploymentTypeDescription")}
                  </p>
                </div>
                <select
                  name="isCloud"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                  defaultValue="true"
                >
                  <option value="true">{t("dataConnectors.confluence.atlassianCloud")}</option>
                  <option value="false">{t("dataConnectors.confluence.selfHosted")}</option>
                </select>
              </div>

              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold flex gap-x-2 items-center">
                    <p className="font-bold text-theme-text-primary">
                      {t("dataConnectors.confluence.baseUrl")}
                    </p>
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    {t("dataConnectors.confluence.baseUrlDescription")}
                  </p>
                </div>
                <input
                  type="url"
                  name="baseUrl"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder={t("dataConnectors.confluence.baseUrlPlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold">
                    {t("dataConnectors.confluence.spaceKey")}
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    {t("dataConnectors.confluence.spaceKeyDescription")}
                  </p>
                </div>
                <input
                  type="text"
                  name="spaceKey"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder={t("dataConnectors.confluence.spaceKeyPlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold">
                    {t("dataConnectors.confluence.username")}
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    {t("dataConnectors.confluence.usernameDescription")}
                  </p>
                </div>
                <input
                  type="text"
                  name="username"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder={t("dataConnectors.confluence.usernamePlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold flex gap-x-2 items-center">
                    <p className="font-bold text-theme-text-primary">
                      {t("dataConnectors.confluence.accessToken")}
                    </p>
                    <Warning
                      size={14}
                      className="ml-1 text-orange-500 cursor-pointer"
                      data-tooltip-id="access-token-tooltip"
                      data-tooltip-place="right"
                    />
                    <Tooltip
                      delayHide={300}
                      id="access-token-tooltip"
                      className="max-w-xs z-99"
                      clickable={true}
                    >
                      <p className="text-sm">
                        {t("dataConnectors.confluence.accessTokenTooltip")}{" "}
                        <a
                          href="https://id.atlassian.com/manage-profile/security/api-tokens"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {t("dataConnectors.confluence.accessTokenLinkText")}
                        </a>
                        .
                      </p>
                    </Tooltip>
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    {t("dataConnectors.confluence.accessTokenDescription")}
                  </p>
                </div>
                <input
                  type="password"
                  name="accessToken"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder={t("dataConnectors.confluence.accessTokenPlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full pr-10">
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full justify-center border border-slate-200 px-4 py-2 rounded-lg text-dark-text text-sm font-bold items-center flex gap-x-2 bg-slate-200 hover:bg-slate-300 hover:text-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {loading ? t("dataConnectors.confluence.collectingPages") : t("dataConnectors.confluence.submit")}
            </button>
            {loading && (
              <p className="text-xs text-theme-text-secondary">
                {t("dataConnectors.confluence.loadingMessage")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
