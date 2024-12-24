import React from "react";

export default function CheckingPersonalInfo({ isChecking }) {
  if (!isChecking) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-theme-bg-secondary rounded-lg shadow-lg p-3 z-50 flex items-center space-x-2">
      <div className="animate-spin">
        <svg
          className="w-5 h-5 text-theme-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <span className="text-theme-text text-sm">檢測個人資訊中...</span>
    </div>
  );
}
