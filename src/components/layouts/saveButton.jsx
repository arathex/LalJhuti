import { useState } from "react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <button
        aria-label="save"
        type="button"
        onClick={() => setSaved(!saved)}
        className={`
          flex items-center justify-center rounded-md border transition-colors
          h-10 w-10 p-2 cursor-pointer
          ${saved ? "border-blue-500" : "border-gray-400"}
          hover:border-blue-500 group
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className={`
            overflow-visible h-7 w-7
            ${saved ? "text-blue-500" : "text-gray-500"}
          `}
        >
          <path
            d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
            data-path="box"
            className="group-hover:animate-has-saved"
          />
          <path
            d="M7 3L7 8L15 8"
            data-path="line-top"
            className="group-hover:animate-has-saved-line-top"
          />
          <path
            d="M17 20L17 13L7 13L7 20"
            data-path="line-bottom"
            className="group-hover:animate-has-saved-line-bottom group-hover:animate-has-saved-line-bottom-2"
          />
        </svg>
      </button>

      {/* Embedded keyframes */}
      <style>{`
        @keyframes has-saved-line-top {
          33% {
            transform: rotate(0deg) translate(1px, 2px) scale(1.75);
            d: path("M 3 5 L 3 8 L 3 8");
          }
          66% {
            transform: rotate(20deg) translate(2px, -2px) scale(0.75);
          }
          100% {
            transform: rotate(0deg) translate(0px, 0px) scale(1);
          }
        }
        @keyframes has-saved-line-bottom {
          33% {
            transform: rotate(0deg) translate(1px, 2px) scale(1.75);
            d: path("M 17 20 L 17 13 L 7 13 L 7 20");
          }
          66% {
            transform: rotate(20deg) translate(2px, -2px) scale(0.75);
          }
          100% {
            transform: rotate(0deg) translate(0px, 0px) scale(1);
            d: path("M 17 21 L 17 21 L 7 21 L 7 21");
          }
        }
        @keyframes has-saved-line-bottom-2 {
          from {
            d: path("M 17 21 L 17 21 L 7 21 L 7 21");
          }
          to {
            transform: rotate(0deg) translate(0px, 0px) scale(1);
            d: path("M 17 20 L 17 13 L 7 13 L 7 20");
            fill: white;
          }
        }
        @keyframes has-saved {
          33% {
            transform: rotate(0deg) translate(1px, 2px) scale(1.75);
          }
          66% {
            transform: rotate(20deg) translate(2px, -2px) scale(0.75);
          }
          100% {
            transform: rotate(0deg) translate(0px, 0px) scale(1);
          }
        }

        .animate-has-saved { 
          animation: has-saved 1s cubic-bezier(0.5, 0, 0.25, 1) forwards; 
          fill: hsl(211 100% 48% / 0.35);
        }
        .animate-has-saved-line-top { 
          animation: has-saved-line-top 1s cubic-bezier(0.5, 0, 0.25, 1) forwards; 
        }
        .animate-has-saved-line-bottom { 
          animation: has-saved-line-bottom 1s cubic-bezier(0.5, 0, 0.25, 1) forwards; 
        }
        .animate-has-saved-line-bottom-2 { 
          animation: has-saved-line-bottom-2 1s cubic-bezier(0.5, 0, 0.25, 1) 0.75s; 
        }
      `}</style>
    </>
  );
}
