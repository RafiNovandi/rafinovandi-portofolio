"use client";

import { useLayout } from "@/app/context/layout-context";
import { buttonVariants } from "../ui/button";

export function LayoutToggle() {
  const { layout, setLayout } = useLayout();

  return (
    <button
      type="button"
      onClick={() => setLayout(layout === "sidebar" ? "topbar" : "sidebar")}
      className={`
        ${buttonVariants({ variant: "outline", size: "icon" })}
        transition-all duration-200 bg-muted !border !border-[#E5E5E5]
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
      >
        <g clipPath="url(#clip0_4418_3658)">
          <path
            d="M7.97021 2V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9702 9.43945L12.4102 11.9995L14.9702 14.5595"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4418_3658">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
