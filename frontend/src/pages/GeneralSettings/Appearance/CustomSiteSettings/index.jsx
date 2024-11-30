import { useEffect, useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

export default function CustomSiteSettings() {
  const { t } = useTranslation();
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState({
    title: null,
    faviconUrl: null,
  });

  useEffect(() => {
    Admin.systemPreferences().then(({ settings }) => {
      setSettings({
        title: settings?.meta_page_title,
        faviconUrl: settings?.meta_page_favicon,
      });
    });
  }, []);

  async function handleSiteSettingUpdate(e) {
    e.preventDefault();
    await Admin.updateSystemPreferences({
      meta_page_title: settings.title ?? null,
      meta_page_favicon: settings.faviconUrl ?? null,
    });
    showToast(t("customSiteSettings.toast.sitePreferencesUpdated"), "success", { clear: true });
    setHasChanges(false);
    return;
  }

  return (
    <form
      className="mb-6"
      onChange={() => setHasChanges(true)}
      onSubmit={handleSiteSettingUpdate}
    >
      <div className="flex flex-col border-t border-white/30 pt-4 gap-y-2">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-base leading-6 font-bold text-white">
            {t("customSiteSettings.title")}
          </h2>
          <p className="text-xs leading-[18px] font-base text-white/60">
            {t("customSiteSettings.description")}
          </p>
        </div>

        <div className="w-fit">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-sm leading-6 text-white">{t("customSiteSettings.tabTitle.title")}</h2>
            <p className="text-xs leading-[18px] font-base text-white/60">
              {t("customSiteSettings.tabTitle.description")}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <input
              name="meta_page_title"
              type="text"
              className="border-none bg-theme-settings-input-bg mt-3 text-white text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5 max-w-[400px] placeholder:text-theme-settings-input-placeholder"
              placeholder={t("customSiteSettings.tabTitle.placeholder")}
              autoComplete="off"
              onChange={(e) => {
                setSettings((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
              value={settings.title ?? t("customSiteSettings.tabTitle.placeholder")}
            />
          </div>
        </div>

        <div className="w-fit">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-sm leading-6 text-white">{t("customSiteSettings.tabFavicon.title")}</h2>
            <p className="text-xs leading-[18px] font-base text-white/60">
              {t("customSiteSettings.tabFavicon.description")}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={settings.faviconUrl ?? "/favicon.png"}
              onError={(e) => (e.target.src = "/favicon.png")}
              className="h-10 w-10 rounded-lg mt-2.5"
            />
            <input
              name="meta_page_favicon"
              type="url"
              className="border-none bg-theme-settings-input-bg mt-3 text-white text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5 max-w-[400px] placeholder:text-theme-settings-input-placeholder"
              placeholder={t("customSiteSettings.tabFavicon.placeholder")}
              onChange={(e) => {
                setSettings((prev) => {
                  return { ...prev, faviconUrl: e.target.value };
                });
              }}
              autoComplete="off"
              value={settings.faviconUrl ?? ""}
            />
          </div>
        </div>

        {hasChanges && (
          <button
            type="submit"
            className="transition-all mt-6 w-fit duration-300 border border-slate-200 px-5 py-2.5 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
          >
            {t("customSiteSettings.saveButton")}
          </button>
        )}
      </div>
    </form>
  );
}
