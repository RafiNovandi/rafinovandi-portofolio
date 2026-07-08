"use client";

import { buttonVariants } from "../ui/button";

export function LayoutToggle() {
  return (
    <div className={buttonVariants({ variant: "outline", size: "icon" })}>
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_4418_3651)">
          <path
            d="M22 8.5H2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5599 15.4995L11.9999 12.9395L9.43994 15.4995"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.97021 12.98V15C1.97021 20 3.97021 22 8.97021 22H14.9702C19.9702 22 21.9702 20 21.9702 15V9C21.9702 4 19.9702 2 14.9702 2H8.97021C3.97021 2 1.97021 4 1.97021 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4418_3651">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_4418_3658)">
          <path
            d="M7.97021 2V22"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9702 9.43945L12.4102 11.9995L14.9702 14.5595"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4418_3658">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg> */}
    </div>
  );
}
