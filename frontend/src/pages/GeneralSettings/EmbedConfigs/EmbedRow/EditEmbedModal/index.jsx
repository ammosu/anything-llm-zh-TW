import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import {
  BooleanInput,
  ChatModeSelection,
  NumberInput,
  PermittedDomains,
  WorkspaceSelection,
  enforceSubmissionSchema,
} from "../../NewEmbedModal";
import Embed from "@/models/embed";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

export default function EditEmbedModal({ embed, closeModal }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);

  const handleUpdate = async (e) => {
    setError(null);
    e.preventDefault();
    const form = new FormData(e.target);
    const data = enforceSubmissionSchema(form);
    const { success, error } = await Embed.updateEmbed(embed.id, data);
    if (success) {
      showToast(t("editEmbed.toast.success"), "success", { clear: true });
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
    setError(error);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border">
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <div className="w-full flex gap-x-2 items-center">
            <h3 className="text-xl font-semibold text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
              {t("editEmbed.title", { id: embed.id })}
            </h3>
          </div>
          <button
            onClick={closeModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border hover:border-theme-modal-border hover:border-opacity-50 border-transparent border"
          >
            <X size={24} weight="bold" className="text-white" />
          </button>
        </div>
        <div className="px-7 py-6">
          <form onSubmit={handleUpdate}>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              <WorkspaceSelection defaultValue={embed.workspace.id} />
              <ChatModeSelection defaultValue={embed.chat_mode} />
              <PermittedDomains
                defaultValue={
                  embed.allowlist_domains
                    ? JSON.parse(embed.allowlist_domains)
                    : []
                }
              />
              <NumberInput
                name="max_chats_per_day"
                title={t("editEmbed.maxChatsPerDay.title")}
                hint={t("editEmbed.maxChatsPerDay.hint")}
                defaultValue={embed.max_chats_per_day}
              />
              <NumberInput
                name="max_chats_per_session"
                title={t("editEmbed.maxChatsPerSession.title")}
                hint={t("editEmbed.maxChatsPerSession.hint")}
                defaultValue={embed.max_chats_per_session}
              />
              <BooleanInput
                name="allow_model_override"
                title={t("editEmbed.allowModelOverride.title")}
                hint={t("editEmbed.allowModelOverride.hint")}
                defaultValue={embed.allow_model_override}
              />
              <BooleanInput
                name="allow_temperature_override"
                title={t("editEmbed.allowTemperatureOverride.title")}
                hint={t("editEmbed.allowTemperatureOverride.hint")}
                defaultValue={embed.allow_temperature_override}
              />
              <BooleanInput
                name="allow_prompt_override"
                title={t("editEmbed.allowPromptOverride.title")}
                hint={t("editEmbed.allowPromptOverride.hint")}
                defaultValue={embed.allow_prompt_override}
              />

              {error && (
                <p className="text-red-400 text-sm">
                  {t("editEmbed.error", { error })}
                </p>
              )}
              <p className="text-white text-opacity-60 text-xs md:text-sm">
                {t("editEmbed.info")}&nbsp;
                <code className="border-none bg-theme-settings-input-bg text-white mx-1 px-1 rounded-sm">
                  &lt;script&gt;
                </code>
                {t("editEmbed.infoCode")}
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-theme-modal-border">
              <button
                onClick={closeModal}
                type="button"
                className="transition-all duration-300 text-white hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
              >
                {t("editEmbed.cancelButton")}
              </button>
              <button
                type="submit"
                className="transition-all duration-300 bg-white text-black hover:opacity-60 px-4 py-2 rounded-lg text-sm"
              >
                {t("editEmbed.updateButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
