"use client";

import AppSidebar from "@/components/common/app-sidebar";
import TopNavbar from "@/components/common/top-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useLayout } from "@/app/context/layout-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layout } = useLayout();

  if (layout === "sidebar") {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex-1">{children}</main>
      </SidebarProvider>
    );
  }

  return (
    <>
      <TopNavbar />
      <main className="w-full">{children}</main>
    </>
  );
}
