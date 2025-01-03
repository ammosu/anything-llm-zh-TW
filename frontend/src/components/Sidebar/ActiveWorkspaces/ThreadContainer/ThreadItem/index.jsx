import Workspace from "@/models/workspace";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";
import {
  ArrowCounterClockwise,
  DotsThree,
  PencilSimple,
  Trash,
  X,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import truncate from "truncate";
import { useTranslation } from "react-i18next";

const THREAD_CALLOUT_DETAIL_WIDTH = 26;
export default function ThreadItem({
  idx,
  activeIdx,
  isActive,
  workspace,
  thread,
  onRemove,
  toggleMarkForDeletion,
  hasNext,
  ctrlPressed = false,
}) {
  const { slug } = useParams();
  const { t } = useTranslation();
  const optionsContainer = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const linkTo = !thread.slug
    ? paths.workspace.chat(slug)
    : paths.workspace.thread(slug, thread.slug);

  return (
    <div
      className="w-full relative flex h-[38px] items-center border-none rounded-lg"
      role="listitem"
    >
      {/* Curved line Element and leader if required */}
      <div
        style={{ width: THREAD_CALLOUT_DETAIL_WIDTH / 2 }}
        className={`${
          isActive
            ? "border-l-2 border-b-2 border-white light:border-theme-sidebar-border z-30"
            : "border-l border-b border-[#6F6F71] light:border-theme-sidebar-border z-10"
        } h-[50%] absolute top-0 left-2 rounded-bl-lg`}
      ></div>
      {/* Downstroke border for next item */}
      {hasNext && (
        <div
          style={{ width: THREAD_CALLOUT_DETAIL_WIDTH / 2 }}
          className={`${
            idx <= activeIdx && !isActive
              ? "border-l-2 border-white light:border-theme-sidebar-border z-20"
              : "border-l border-[#6F6F71] light:border-theme-sidebar-border z-10"
          } h-[100%] absolute top-0 left-2`}
        ></div>
      )}

      {/* Curved line inline placeholder for spacing - not visible */}
      <div
        style={{ width: THREAD_CALLOUT_DETAIL_WIDTH + 8 }}
        className="h-full"
      />
      <div
        className={`flex w-full items-center justify-between pr-2 group relative ${
          isActive
            ? "bg-[var(--theme-sidebar-thread-selected)] border border-solid border-transparent light:border-blue-400"
            : "hover:bg-theme-sidebar-subitem-hover"
        } rounded-[4px]`}
      >
        {thread.deleted ? (
          <div className="w-full flex justify-between">
            <div className="w-full pl-2 py-1">
              <p
                className={`text-left text-sm text-slate-400/50 light:text-slate-500 italic`}
              >
                {t("threads.deleted")}
              </p>
            </div>
            {ctrlPressed && (
              <button
                type="button"
                className="border-none"
                onClick={() => toggleMarkForDeletion(thread.id)}
              >
                <ArrowCounterClockwise
                  className="text-zinc-300 hover:text-white light:text-theme-text-secondary hover:light:text-theme-text-primary"
                  size={18}
                />
              </button>
            )}
          </div>
        ) : (
          <a
            href={
              window.location.pathname === linkTo || ctrlPressed ? "#" : linkTo
            }
            className="w-full pl-2 py-1"
            aria-current={isActive ? "page" : ""}
          >
            <p
              className={`text-left text-sm ${
                isActive ? "font-medium text-white" : "text-theme-text-primary"
              }`}
            >
              {truncate(thread.name, 25)}
            </p>
          </a>
        )}
        {!!thread.slug && !thread.deleted && (
          <div ref={optionsContainer} className="flex items-center">
            {" "}
            {/* Added flex and items-center */}
            {ctrlPressed ? (
              <button
                type="button"
                className="border-none"
                onClick={() => toggleMarkForDeletion(thread.id)}
              >
                <X
                  className="text-zinc-300 light:text-theme-text-secondary hover:text-white hover:light:text-theme-text-primary"
                  weight="bold"
                  size={18}
                />
              </button>
            ) : (
              <div className="flex items-center w-fit group-hover:visible md:invisible gap-x-1">
                <button
                  type="button"
                  className="border-none"
                  onClick={() => setShowOptions(!showOptions)}
                  aria-label={t("threads.options")}
                >
                  <DotsThree
                    className="text-slate-300 light:text-theme-text-secondary hover:text-white hover:light:text-theme-text-primary"
                    size={25}
                  />
                </button>
              </div>
            )}
            {showOptions && (
              <OptionsMenu
                containerRef={optionsContainer}
                workspace={workspace}
                thread={thread}
                onRemove={onRemove}
                close={() => setShowOptions(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function OptionsMenu({ containerRef, workspace, thread, onRemove, close }) {
  const menuRef = useRef(null);
  const { t } = useTranslation();

  // Ref menu options
  const outsideClick = (e) => {
    if (!menuRef.current) return false;
    if (
      !menuRef.current?.contains(e.target) &&
      !containerRef.current?.contains(e.target)
    )
      close();
    return false;
  };

  const isEsc = (e) => {
    if (e.key === "Escape" || e.key === "Esc") close();
  };

  function cleanupListeners() {
    window.removeEventListener("click", outsideClick);
    window.removeEventListener("keyup", isEsc);
  }
  // end Ref menu options

  useEffect(() => {
    function setListeners() {
      if (!menuRef?.current || !containerRef.current) return false;
      window.document.addEventListener("click", outsideClick);
      window.document.addEventListener("keyup", isEsc);
    }

    setListeners();
    return cleanupListeners;
  }, [menuRef.current, containerRef.current]);

  const renameThread = async () => {
    const name = window
      .prompt(t("threads.renamePrompt"))
      ?.trim();
    if (!name || name.length === 0) {
      close();
      return;
    }

    const { message } = await Workspace.threads.update(
      workspace.slug,
      thread.slug,
      { name }
    );
    if (!!message) {
      showToast(
        t("threads.renameError", { message }),
        "error",
        { clear: true }
      );
      close();
      return;
    }

    thread.name = name;
    close();
  };

  const handleDelete = async () => {
    if (!window.confirm(t("threads.deleteConfirm"))) return;
    const success = await Workspace.threads.delete(workspace.slug, thread.slug);
    if (!success) {
      showToast(t("threads.deleteError"), "error", { clear: true });
      return;
    }
    if (success) {
      showToast(t("threads.deleteSuccess"), "success", { clear: true });
      onRemove(thread.id);
      return;
    }
  };

  return (
    <div
      ref={menuRef}
      className="absolute w-fit z-[20] top-[25px] right-[10px] options-menu rounded-lg p-1"
    >
      <button
        onClick={renameThread}
        type="button"
        className="w-full rounded-md flex items-center p-2 gap-x-2"
      >
        <PencilSimple size={18} />
        <p className="text-sm">{t("threads.rename")}</p>
      </button>
      <button
        onClick={handleDelete}
        type="button"
        className="w-full rounded-md flex items-center p-2 gap-x-2 delete-button"
      >
        <Trash size={18} />
        <p className="text-sm">{t("threads.delete")}</p>
      </button>
    </div>
  );
}
