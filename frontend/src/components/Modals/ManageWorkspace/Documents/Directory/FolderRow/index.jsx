import { useState } from "react";
import FileRow from "../FileRow";
import { CaretDown, FolderNotch } from "@phosphor-icons/react";
import { middleTruncate } from "@/utils/directories";

export default function FolderRow({
  item,
  selected,
  onRowClick,
  toggleSelection,
  isSelected,
  autoExpanded = false,
}) {
  const [expanded, setExpanded] = useState(autoExpanded);

  const handleExpandClick = (event) => {
    event.stopPropagation();
    setExpanded(!expanded);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSelection(item);
    }
  };

  return (
    <>
      <tr
        onClick={onRowClick}
        className={`text-theme-text-primary text-xs grid grid-cols-12 py-2 pl-3.5 pr-8 cursor-pointer transition-colors duration-200
          ${selected 
            ? "bg-theme-file-row-selected-odd dark:bg-theme-file-row-selected-even" 
            : "hover:bg-theme-file-picker-hover"
          }`}
      >
        <div className="col-span-6 flex gap-x-[4px] items-center">
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
            onClick={(event) => {
              event.stopPropagation();
              toggleSelection(item);
            }}
            onKeyDown={handleKeyPress}
          >
            {selected && <div className="w-1.5 h-1.5 bg-white rounded-[2px]" />}
          </div>

          <div
            onClick={handleExpandClick}
            className={`transform transition-transform duration-200 ${
              expanded ? "rotate-360" : "rotate-270"
            }`}
          >
            <CaretDown 
              className={`text-base font-bold w-4 h-4
                ${selected 
                  ? "text-blue-500 dark:text-blue-400" 
                  : "text-gray-600 dark:text-gray-200"
                }`}
            />
          </div>

          <FolderNotch
            className={`shrink-0 text-base font-bold w-4 h-4 mr-[3px]
              ${selected 
                ? "text-blue-500 dark:text-blue-400" 
                : "text-gray-600 dark:text-gray-200"
              }`}
            weight="fill"
          />

          <p className={`whitespace-nowrap overflow-show max-w-[400px]
            ${selected 
              ? "text-blue-500 dark:text-blue-400 font-medium" 
              : "text-gray-700 dark:text-gray-200"
            }`}>
            {middleTruncate(item.name, 35)}
          </p>
        </div>
        <p className="col-span-2 pl-3.5" />
        <p className="col-span-2 pl-2" />
      </tr>
      
      {expanded && (
        <>
          {item.items.map((fileItem) => (
            <FileRow
              key={fileItem.id}
              item={fileItem}
              selected={isSelected(fileItem.id)}
              toggleSelection={toggleSelection}
            />
          ))}
        </>
      )}
    </>
  );
}