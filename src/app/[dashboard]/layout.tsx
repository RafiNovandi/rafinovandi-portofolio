"use client";

import AppSidebar from "@/components/common/app-sidebar";
import TopNavbar from "@/components/common/top-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useLayout } from "@/app/context/layout-context";
import Footer from "@/components/common/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layout } = useLayout();
  <div></div>;

  if (layout === "sidebar") {
    return (
      <SidebarProvider>
        <AppSidebar />
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex-1">
            {children}
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div>
      <TopNavbar />
      <main className="w-full">
        {children}
        <Footer />
      </main>
    </div>
  );
}
