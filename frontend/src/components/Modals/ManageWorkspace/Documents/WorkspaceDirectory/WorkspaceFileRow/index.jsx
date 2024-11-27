import { memo, useState } from "react";
import {
  formatDate,
  getFileExtension,
  middleTruncate,
} from "@/utils/directories";
import { ArrowUUpLeft, Eye, File, PushPin } from "@phosphor-icons/react";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import System from "@/models/system";
import { useTranslation } from "react-i18next";

export default function WorkspaceFileRow({
  item,
  folderName,
  workspace,
  setLoading,
  setLoadingMessage,
  fetchKeys,
  hasChanges,
  movedItems,
  selected,
  toggleSelection,
  disableSelection,
  setSelectedItems,
}) {
  const { t } = useTranslation();

  const onRemoveClick = async (e) => {
    e.stopPropagation();
    setLoading(true);

    try {
      setLoadingMessage(t("workspaceFileRow.removingFileMessage"));
      await Workspace.modifyEmbeddings(workspace.slug, {
        adds: [],
        deletes: [`${folderName}/${item.name}`],
      });
      await fetchKeys(true);
    } catch (error) {
      console.error(t("workspaceFileRow.removeFileError"), error);
    }
    setSelectedItems({});
    setLoadingMessage("");
    setLoading(false);
  };

  function toggleRowSelection(e) {
    if (disableSelection) return;
    e.stopPropagation();
    toggleSelection();
  }

  function handleRowSelection(e) {
    e.stopPropagation();
    toggleSelection();
  }

  const isMovedItem = movedItems?.some((movedItem) => movedItem.id === item.id);
  return (
    <div
      className={`text-theme-text-primary text-xs grid grid-cols-12 py-2 pl-3.5 pr-8 h-[34px] items-center ${
        !disableSelection
          ? "hover:bg-theme-file-picker-hover cursor-pointer"
          : ""
      } ${isMovedItem ? "bg-green-800/40" : "file-row"} ${
        selected ? "selected light:text-white" : ""
      }`}
      onClick={toggleRowSelection}
    >
      <div
        className="col-span-10 w-fit flex gap-x-[2px] items-center relative"
        data-tooltip-id="ws-directory-item"
        data-tooltip-content={JSON.stringify({
          title: item.title,
          date: formatDate(item?.published),
          extension: getFileExtension(item.url).toUpperCase(),
        })}
      >
        <div className="shrink-0 w-3 h-3">
          {!disableSelection ? (
            <div
              className={`shrink-0 w-3 h-3 rounded border-[1px] border-solid border-white ${
                selected ? "text-white" : "text-theme-text-primary light:invert"
              } flex justify-center items-center cursor-pointer`}
              role="checkbox"
              aria-checked={selected}
              tabIndex={0}
              onClick={handleRowSelection}
            >
              {selected && <div className="w-2 h-2 bg-white rounded-[2px]" />}
            </div>
          ) : null}
        </div>
        <File
          className="shrink-0 text-base font-bold w-4 h-4 mr-[3px] ml-1"
          weight="fill"
        />
        <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[400px]">
          {middleTruncate(item.title, 50)}
        </p>
      </div>
      <div className="col-span-2 flex justify-end items-center">
        {hasChanges ? (
          <div className="w-4 h-4 ml-2 flex-shrink-0" />
        ) : (
          <div className="flex gap-x-2 items-center">
            <WatchForChanges
              workspace={workspace}
              docPath={`${folderName}/${item.name}`}
              item={item}
            />
            <PinItemToWorkspace
              workspace={workspace}
              docPath={`${folderName}/${item.name}`}
              item={item}
            />
            <RemoveItemFromWorkspace item={item} onClick={onRemoveClick} />
          </div>
        )}
      </div>
    </div>
  );
}

const PinItemToWorkspace = memo(({ workspace, docPath, item }) => {
  const { t } = useTranslation();
  const [pinned, setPinned] = useState(
    item?.pinnedWorkspaces?.includes(workspace.id) || false
  );
  const [hover, setHover] = useState(false);
  const pinEvent = new CustomEvent("pinned_document");

  const updatePinStatus = async (e) => {
    try {
      e.stopPropagation();
      if (!pinned) window.dispatchEvent(pinEvent);
      const success = await Workspace.setPinForDocument(
        workspace.slug,
        docPath,
        !pinned
      );

      if (!success) {
        showToast(
          t("workspaceFileRow.pinError", { action: !pinned ? "pin" : "unpin" }),
          "error",
          { clear: true }
        );
        return;
      }

      showToast(
        t("workspaceFileRow.pinSuccess", { action: !pinned ? "pinned to" : "unpinned from" }),
        "success",
        { clear: true }
      );
      setPinned(!pinned);
    } catch (error) {
      showToast(t("workspaceFileRow.pinErrorMessage", { error: error.message }), "error", {
        clear: true,
      });
      return;
    }
  };

  if (!item) return <div className="w-[16px] p-[2px] ml-2" />;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex gap-x-2 items-center hover:bg-theme-file-picker-hover p-[2px] rounded ml-2"
    >
      <PushPin
        data-tooltip-id="pin-document"
        data-tooltip-content={pinned ? t("workspaceFileRow.unpinTooltip") : t("workspaceFileRow.pinTooltip")}
        size={16}
        onClick={updatePinStatus}
        weight={hover || pinned ? "fill" : "regular"}
        className="outline-none text-base font-bold flex-shrink-0 cursor-pointer"
      />
    </div>
  );
});

const WatchForChanges = memo(({ workspace, docPath, item }) => {
  const { t } = useTranslation();
  const [watched, setWatched] = useState(item?.watched || false);
  const [hover, setHover] = useState(false);
  const watchEvent = new CustomEvent("watch_document_for_changes");

  const updateWatchStatus = async () => {
    try {
      if (!watched) window.dispatchEvent(watchEvent);
      const success =
        await System.experimentalFeatures.liveSync.setWatchStatusForDocument(
          workspace.slug,
          docPath,
          !watched
        );

      if (!success) {
        showToast(t("workspaceFileRow.watchError", { action: !watched ? "watch" : "unwatch" }), "error", {
          clear: true,
        });
        return;
      }

      showToast(
        t("workspaceFileRow.watchSuccess", { action: !watched ? "watching for changes" : "no longer watching for changes" }),
        "success",
        { clear: true }
      );
      setWatched(!watched);
    } catch (error) {
      showToast(t("workspaceFileRow.watchErrorMessage", { error: error.message }), "error", {
        clear: true,
      });
      return;
    }
  };

  if (!item || !item.canWatch) return <div className="w-[16px] p-[2px] ml-2" />;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex gap-x-2 items-center hover:bg-theme-file-picker-hover p-[2px] rounded ml-2"
    >
      <Eye
        data-tooltip-id="watch-changes"
        data-tooltip-content={
          watched ? t("workspaceFileRow.unwatchTooltip") : t("workspaceFileRow.watchTooltip")
        }
        size={16}
        onClick={updateWatchStatus}
        weight={hover || watched ? "fill" : "regular"}
        className="outline-none text-base font-bold flex-shrink-0 cursor-pointer"
      />
    </div>
  );
});

const RemoveItemFromWorkspace = ({ item, onClick }) => {
  const { t } = useTranslation();
  return (
    <div>
      <ArrowUUpLeft
        data-tooltip-id="remove-document"
        data-tooltip-content={t("workspaceFileRow.removeTooltip")}
        onClick={onClick}
        className="text-base font-bold w-4 h-4 ml-2 flex-shrink-0 cursor-pointer"
      />
    </div>
  );
};
