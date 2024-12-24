import React from "react";

export default function PersonalInfoWarning({ isOpen, onClose, onConfirm, details }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-theme-bg-secondary rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4 text-theme-danger">⚠️ 個人資訊警告</h3>
        <div className="mb-4">
          <p className="text-theme-text mb-2">
            您的訊息中可能包含以下個人資訊：
          </p>
          <ul className="list-disc pl-5 text-theme-text">
            {details?.detectedItems?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-theme-text">{details?.explanation}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-theme-bg text-theme-text hover:bg-theme-bg-hover"
          >
            取消
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-theme-danger text-white hover:bg-red-600"
          >
            仍要傳送
          </button>
        </div>
      </div>
    </div>
  );
}
