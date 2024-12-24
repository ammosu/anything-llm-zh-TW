import React from "react";
import {
  formatDate,
  getFileExtension,
  middleTruncate,
} from "@/utils/directories";
import { File } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export default function FileRow({ item, selected, toggleSelection }) {
  const { t } = useTranslation();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSelection(item);
    }
  };

  return (
    <tr
      onClick={() => toggleSelection(item)}
      className={`text-theme-text-primary text-xs grid grid-cols-12 py-2 pl-3.5 pr-8 cursor-pointer transition-colors duration-200
        ${selected 
          ? "bg-theme-file-row-selected-odd dark:bg-theme-file-row-selected-even" 
          : "hover:bg-theme-file-picker-hover"
        }`}
    >
      <div
        data-tooltip-id="directory-item"
        className="col-span-10 w-fit flex gap-x-[4px] items-center relative"
        data-tooltip-content={JSON.stringify({
          title: item.title,
          date: formatDate(item?.published),
          extension: getFileExtension(item.url).toUpperCase(),
        })}
      >
        <div
          className={`shrink-0 w-3 h-3 rounded border border-solid
            ${selected 
              ? "bg-blue-500 border-blue-500" 
              : "border-gray-400 dark:border-gray-200"
            } 
            hover:border-blue-400 
            flex justify-center items-center cursor-pointer
            transition-colors duration-200`}
          role="checkbox"
          aria-checked={selected}
          tabIndex={0}
          onKeyDown={handleKeyPress}
        >
          {selected && (
            <div className="w-1.5 h-1.5 bg-white rounded-[2px]" />
          )}
        </div>

        <File
          className={`shrink-0 text-base font-bold w-4 h-4 mr-[3px]
            ${selected 
              ? "text-blue-500 dark:text-blue-400" 
              : "text-gray-600 dark:text-gray-200"
            }`}
          weight="fill"
        />

        <p className={`whitespace-nowrap overflow-hidden text-ellipsis max-w-[400px]
          ${selected 
            ? "text-blue-500 dark:text-blue-400 font-medium" 
            : "text-gray-700 dark:text-gray-200"
          }`}>
          {middleTruncate(item.title, 55)}
        </p>
      </div>

      <div className="col-span-2 flex justify-end items-center">
        {item?.cached && (
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-3xl px-2 py-0.5">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              {t("fileRow.cached")}
            </p>
          </div>
        )}
      </div>
    </tr>
  );
}