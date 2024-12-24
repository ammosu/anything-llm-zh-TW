import useUser from "@/hooks/useUser";
import paths from "@/utils/paths";
import { ArrowUUpLeft, Wrench } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SettingsButton() {
  const isInSettings = !!useMatch("/settings/*");
  const { user } = useUser();
  const { t } = useTranslation();

  // Hide settings button for both default and workspace_manager roles
  if (user && (user?.role === "default")) return null;

  if (isInSettings)
    return (
      <div className="flex w-fit">
        <Link
          to={paths.home()}
          className="transition-all duration-300 p-2 rounded-full bg-theme-sidebar-footer-icon hover:bg-theme-sidebar-footer-icon-hover"
          aria-label={t("settingsButton.homeAriaLabel")}
          data-tooltip-id="footer-item"
          data-tooltip-content={t("settingsButton.backToWorkspaces")}
        >
          <ArrowUUpLeft
            className="h-5 w-5"
            weight="fill"
            color="var(--theme-sidebar-footer-icon-fill)"
          />
        </Link>
      </div>
    );

  return (
    <div className="flex w-fit">
      <Link
        to={paths.settings.appearance()}
        className="transition-all duration-300 p-2 rounded-full bg-theme-sidebar-footer-icon hover:bg-theme-sidebar-footer-icon-hover"
        aria-label={t("settingsButton.settingsAriaLabel")}
        data-tooltip-id="footer-item"
        data-tooltip-content={t("settingsButton.openSettings")}
      >
        <Wrench
          className="h-5 w-5"
          weight="fill"
          color="var(--theme-sidebar-footer-icon-fill)"
        />
      </Link>
    </div>
  );
}
