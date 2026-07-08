"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import { LayoutToggle } from "./layout-toggle";
import { navigation } from "@/app/constants/navigation";
import { DarkModeToggle } from "./darkmode-toggle";

export default function AppSidebar({ logo = "Portfolio." }) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between gap-3 pt-5">
            <a className="flex items-center gap-2 font-bold text-[17px] tracking-[-0.3px] text-foreground no-underline">
              <div className="w-1.75 height-[7px] rounded-full shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
              {logo}
            </a>
            <div className="flex">
              {/* <div className="pr-2">
              <DarkModeToggle />
              </div> */}
              <LayoutToggle />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu className="flex flex-col gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/dashboard"
                    ? pathname === item.href
                    : pathname?.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-3  px-4 py-3 transition-colors duration-200 ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-pill"
                          className="absolute inset-0 rounded-xl bg-muted border border-border pointer-events-none"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <div className="relative flex items-center gap-3 z-10">
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
