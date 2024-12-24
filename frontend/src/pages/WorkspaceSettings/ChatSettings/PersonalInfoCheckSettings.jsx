import { useTranslation } from "react-i18next";

export default function PersonalInfoCheckSettings({ workspace, setHasChanges }) {
  const { t } = useTranslation();

  const handleChange = (e) => {
    setHasChanges(true);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <p className="block input-label">
            {t("chat.personalInfo.title")}
          </p>
        </div>
        <p className="text-white text-opacity-60 text-xs font-medium py-1.5">
          {t("chat.personalInfo.description")}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {/* Hidden input to always send the field value */}
        <input
          type="hidden"
          name="enablePersonalInfoCheck"
          value="false"
        />
        <input
          type="checkbox"
          name="enablePersonalInfoCheck"
          id="enable-personal-info-check"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          onChange={handleChange}
          defaultChecked={workspace?.enablePersonalInfoCheck ?? true}
          value="on"
        />
        <label
          htmlFor="enable-personal-info-check"
          className="text-white text-sm font-medium"
        >
          {t("chat.personalInfo.enable")}
        </label>
      </div>
    </div>
  );
}
