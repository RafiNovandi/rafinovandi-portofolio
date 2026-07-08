"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import { DarkModeToggle } from "./darkmode-toggle";
import { LayoutToggle } from "./layout-togle";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-center gap-3 p-3  pt-5">
            <DarkModeToggle />
            <LayoutToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <div className="flex items-center gap-3 p-4 hover:bg-muted rounded-md">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3261_13661)">
                    <path
                      d="M22.28 6.90994L20.89 7.22994C19.9 7.45994 19.12 8.22994 18.89 9.22994L18.57 10.6199C18.54 10.7599 18.32 10.7599 18.29 10.6199L17.97 9.22994C17.74 8.23994 16.97 7.45994 15.97 7.22994L14.58 6.90994C14.44 6.87994 14.44 6.65994 14.58 6.62994L15.97 6.30994C16.96 6.07994 17.74 5.30994 17.97 4.30994L18.29 2.91994C18.32 2.77994 18.54 2.77994 18.57 2.91994L18.89 4.30994C19.12 5.29994 19.89 6.07994 20.89 6.30994L22.28 6.62994C22.42 6.65994 22.42 6.87994 22.28 6.90994Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M14.46 3.02005C13.02 1.90005 10.99 1.90005 9.55001 3.02005L3.55001 7.69005C2.58001 8.45005 2.01001 9.61005 2.01001 10.8501V12.0004M22.01 10.8501V18.0001C22.01 20.2101 20.22 22.0001 18.01 22.0001H6.01001C3.80001 22.0001 2.01001 20.2101 2.01001 18.0001V16.5004"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 15V18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3261_13661">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href="/dashboard">
                  <span>Dashboard</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-4 hover:bg-muted rounded-md">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3111_32640)">
                    <path
                      d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3111_32640">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href="/dashboard/about">
                  <span>About</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-4 hover:bg-muted rounded-md">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_4418_3481)">
                    <path
                      d="M18.9198 5.54031C20.6198 6.29031 20.6198 7.53031 18.9198 8.28031L13.0198 10.9003C12.3498 11.2003 11.2498 11.2003 10.5798 10.9003L4.67979 8.28031C2.97979 7.53031 2.97979 6.29031 4.67979 5.54031L10.5798 2.92031C11.2498 2.62031 12.3498 2.62031 13.0198 2.92031L14.9398 3.77031"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_3481">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href="/dashboard/project">
                  <span>Project</span>
                </Link>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
