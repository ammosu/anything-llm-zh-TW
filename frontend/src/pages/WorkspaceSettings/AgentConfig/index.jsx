import System from "@/models/system";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { castToType } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import AgentLLMSelection from "./AgentLLMSelection";
import Admin from "@/models/admin";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import paths from "@/utils/paths";
import useUser from "@/hooks/useUser";
import { useTranslation } from "react-i18next";

export default function WorkspaceAgentConfiguration({ workspace }) {
  const { t } = useTranslation();
  const { user } = useUser();
  const [settings, setSettings] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const formEl = useRef(null);

  useEffect(() => {
    async function fetchSettings() {
      const _settings = await System.keys();
      const _preferences = await Admin.systemPreferences();
      setSettings({ ..._settings, preferences: _preferences.settings } ?? {});
      setLoading(false);
    }
    fetchSettings();
  }, []);

  const handleUpdate = async (e) => {
    setSaving(true);
    e.preventDefault();
    const data = {
      workspace: {},
      system: {},
      env: {},
    };

    const form = new FormData(formEl.current);
    for (var [key, value] of form.entries()) {
      if (key.startsWith("system::")) {
        const [_, label] = key.split("system::");
        data.system[label] = String(value);
        continue;
      }

      if (key.startsWith("env::")) {
        const [_, label] = key.split("env::");
        data.env[label] = String(value);
        continue;
      }

      data.workspace[key] = castToType(key, value);
    }

    const { workspace: updatedWorkspace, message } = await Workspace.update(
      workspace.slug,
      data.workspace
    );
    await Admin.updateSystemPreferences(data.system);
    await System.updateSystem(data.env);

    if (!!updatedWorkspace) {
      showToast(t("workspaceAgentConfiguration.toastSuccess"), "success", {
        clear: true,
      });
    } else {
      showToast(t("workspaceAgentConfiguration.toastError", { message }), "error", {
        clear: true,
      });
    }

    setSaving(false);
    setHasChanges(false);
  };

  if (!workspace || loading) return <LoadingSkeleton t={t} />;
  return (
    <div id="workspace-agent-settings-container">
      <form
        ref={formEl}
        onSubmit={handleUpdate}
        onChange={() => setHasChanges(true)}
        id="agent-settings-form"
        className="w-1/2 flex flex-col gap-y-6"
      >
        <AgentLLMSelection
          settings={settings}
          workspace={workspace}
          setHasChanges={setHasChanges}
        />
        {(!user || user?.role === "admin") && (
          <>
            {!hasChanges && (
              <div className="flex flex-col gap-y-4">
                <a
                  className="w-fit transition-all duration-300 border border-slate-200 px-5 py-2.5 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
                  href={paths.settings.agentSkills()}
                >
                  {t("workspaceAgentConfiguration.configureAgentSkills")}
                </a>
                <p className="text-white text-opacity-60 text-xs font-medium">
                  {t("workspaceAgentConfiguration.customizeDescription")}
                </p>
              </div>
            )}
          </>
        )}

        {hasChanges && (
          <button
            type="submit"
            form="agent-settings-form"
            className="w-fit transition-all duration-300 border border-slate-200 px-5 py-2.5 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
          >
            {saving
              ? t("workspaceAgentConfiguration.updatingAgent")
              : t("workspaceAgentConfiguration.updateWorkspaceAgent")}
          </button>
        )}
      </form>
    </div>
  );
}

function LoadingSkeleton({ t }) {
  return (
    <div id="workspace-agent-settings-container">
      <div className="w-1/2 flex flex-col gap-y-6">
        <Skeleton.default
          height={100}
          width="100%"
          count={2}
          highlightColor="var(--theme-bg-primary)"
          baseColor="var(--theme-bg-secondary)"
          enableAnimation={true}
          containerClassName="flex flex-col gap-y-1"
        />
        <div className="bg-white/10 h-[1px] w-full" />
        <Skeleton.default
          height={100}
          width="100%"
          count={2}
          highlightColor="var(--theme-bg-primary)"
          baseColor="var(--theme-bg-secondary)"
          enableAnimation={true}
          containerClassName="flex flex-col gap-y-1 mt-4"
        />
      </div>
      <p className="text-white text-opacity-60 text-xs font-medium text-center">
        {t("workspaceAgentConfiguration.loading")}
      </p>
    </div>
  );
}
