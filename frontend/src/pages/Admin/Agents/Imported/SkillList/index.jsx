import { CaretRight } from "@phosphor-icons/react";
import { isMobile } from "react-device-detect";
import { sentenceCase } from "text-case";
import { useTranslation } from "react-i18next";

export default function ImportedSkillList({
  skills = [],
  selectedSkill = null,
  handleClick = null,
}) {
  const { t } = useTranslation();

  if (skills.length === 0)
    return (
      <div className="text-theme-text-secondary text-center text-xs flex flex-col gap-y-2">
        <p>{t("skills.noImportedSkills")}</p>
        <p>
          {t("skills.learnAboutAgentSkills")}{" "}
          <a
            href="https://docs.anythingllm.com/agent/custom/developer-guide"
            target="_blank"
            className="text-theme-text-secondary light:underline hover:underline"
          >
            {t("skills.agentDocs")}
          </a>
          .
        </p>
      </div>
    );

  return (
    <div
      className={`bg-theme-bg-secondary text-white rounded-xl ${
        isMobile ? "w-full" : "min-w-[360px] w-fit"
      }`}
    >
      {skills.map((config, index) => (
        <div
          key={config.hubId}
          className={`py-3 px-4 flex items-center justify-between ${
            index === 0 ? "rounded-t-xl" : ""
          } ${
            index === Object.keys(skills).length - 1
              ? "rounded-b-xl"
              : "border-b border-white/10"
          } cursor-pointer transition-all duration-300 hover:bg-theme-bg-primary ${
            selectedSkill === config.hubId ? "bg-theme-bg-primary" : ""
          }`}
          onClick={() => handleClick?.({ ...config, imported: true })}
        >
          <div className="text-sm font-light">{sentenceCase(config.name)}</div>
          <div className="flex items-center gap-x-2">
            <div className="text-sm text-theme-text-secondary font-medium">
              {config.active ? t("skills.status.on") : t("skills.status.off")}
            </div>
            <CaretRight
              size={14}
              weight="bold"
              className="text-theme-text-secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
