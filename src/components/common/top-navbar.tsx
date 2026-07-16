import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutToggle } from "./layout-toggle";
import { DarkModeToggle } from "./darkmode-toggle";

interface NavLink {
  label: string;
  href: string;
}

interface PortfolioNavbarProps {
  logo?: string;
  links?: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  onLinkClick?: (link: NavLink) => void;
  onMenuOpenChange?: (open: boolean) => void;
  fixed?: boolean;
}

const LINKS: NavLink[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
];

export default function TopNavbar({
  logo = "Portfolio.",
  links = LINKS,
  onLinkClick = () => {},
  onMenuOpenChange = () => {},
  fixed = true,
}: PortfolioNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onMenuOpenChange(menuOpen);
  }, [menuOpen, onMenuOpenChange]);

  useEffect(() => {
    if (!fixed) return;
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fixed]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const handleLink = (e: React.MouseEvent, link: NavLink) => {
    setMenuOpen(false);
    onLinkClick(link);
  };

  return (
    <div
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-200 px-5 box-border pointer-events-none"
      ref={rootRef}
      style={
        !fixed
          ? {
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              width: "100%",
              maxWidth: "680px",
              padding: "0 20px",
              boxSizing: "border-box",
            }
          : {}
      }
    >
      <div
        className={`flex items-center justify-between gap-3 p-2.5 pl-5 rounded-xl pointer-events-auto transition-all duration-300 backdrop-blur-lg ${
          scrolled
            ? "bg-background/70 border border-border shadow-[0_8px_40px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-background/90 border border-border backdrop-blur-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.13),inset_0_1px_0_rgba(255,255,255,0.06)]"
        }`}
      >
        {/* Logo */}
        <a className="flex items-center gap-2 font-bold text-[17px] tracking-[-0.3px] text-foreground no-underline">
          <div className="w-1.75 height-[7px] rounded-full shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
          {logo}
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-0.5">
          {links.map((link) => {
            const isActive =
              link.href === "/dashboard"
                ? pathname === link.href
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium no-underline transition-colors duration-200 ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={(e) => handleLink(e, link)}
              >
                {isActive && (
                  <motion.div
                    layoutId="pnav-pill"
                    className="absolute inset-0 rounded-lg bg-muted border border-border pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden sm:flex gap-2">
          <DarkModeToggle />
          <LayoutToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`sm:hidden flex flex-col gap-1.25 p-2 rounded-xl border-none bg-white/5 cursor-pointer pointer-events-auto hover:bg-white/10`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-4.5 h-[1.5px] bg-foreground/80 rounded-sm transition-all duration-300 transform-gpu origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block w-4.5 h-[1.5px] bg-foreground/80 rounded-sm transition-all duration-300 transform-gpu origin-center ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-4.5 h-[1.5px] bg-foreground/80 rounded-sm transition-all duration-300 transform-gpu origin-center ${menuOpen ? "translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-[calc(100%+10px)] left-5 right-5 rounded-2xl bg-background/95 backdrop-blur-[20px] border border-white/8 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.5)] pointer-events-auto"
            initial={{ opacity: 0, y: -8, scaleY: 0.94 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.94 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          >
            <div className="flex flex-col p-2.5 gap-0.5">
              {links.map((link) => {
                const isActive =
                  link.href === "/dashboard"
                    ? pathname === link.href
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-3.5 rounded-xl font-medium text-[14.5px] no-underline text-left cursor-pointer transition-colors ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={(e) => handleLink(e, link)}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pnav-mobile-pill"
                        className="absolute inset-0 rounded-xl bg-muted border border-border pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="h-px bg-white/5 mx-4 my-1.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
