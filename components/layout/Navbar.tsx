"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface NavItem {
  href: string;
  label: string;
  isCta?: boolean;
}

const MAIN_NAV_LINKS: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Sleek Floating Main Navbar */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-border/80 shadow-[0_12px_36px_rgba(31,27,22,0.08)]"
              : "bg-white/80 backdrop-blur-xl border-white/80 shadow-[0_4px_24px_rgba(31,27,22,0.05)]"
          }`}
        >
          {/* Left Column: Brand Logo */}
          <div className="flex-1 flex items-center justify-start">
            <BrandLogo
              theme="light"
              size="md"
              withGlow
            />
          </div>

          {/* Center Column: Perfectly Centered Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-1 lg:gap-2 shrink-0">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-surface-sunken text-terracotta font-bold"
                      : "text-foreground/80 hover:text-foreground hover:bg-surface/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Column: CTA & Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-3">
            <Link href="/start-a-project" className="hidden sm:inline-flex">
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-[#FF4D2E] hover:bg-[#161616] text-white text-xs font-sans font-bold shadow-[0_4px_14px_rgba(255,77,46,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-1.5"
              >
                <span>Start a Project</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </Link>

            {/* Mobile / Full Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="fullscreen-navigation-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-[#1F1B16] text-[#F6F0E4] hover:bg-[#2F2922] transition-all cursor-pointer select-none"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer / Full Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="fullscreen-navigation-menu"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#F7F3EA]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Overlay Top Bar */}
            <div className="flex items-center justify-between border-b border-border/80 pb-5">
              <BrandLogo
                theme="light"
                size="lg"
                withGlow
                onClick={() => setIsOpen(false)}
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full bg-[#1F1B16] text-[#F6F0E4] flex items-center justify-center hover:bg-[#2F2922] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="my-auto py-8">
              <ul className="space-y-4">
                {[
                  { href: "/", label: "Home" },
                  ...MAIN_NAV_LINKS,
                  { href: "/start-a-project", label: "Start a Project", isCta: true },
                ].map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-2 text-2xl sm:text-3xl font-display font-bold tracking-tight transition-colors ${
                          isActive
                            ? "text-terracotta"
                            : "text-foreground hover:text-terracotta"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.isCta && (
                          <ArrowRight className="w-6 h-6 text-terracotta" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Footer Meta */}
            <div className="pt-6 border-t border-border/80 flex flex-col gap-3 font-mono text-xs text-muted">
              <div className="flex items-center justify-between">
                <span>DIRECT FOUNDER EMAIL:</span>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raultz.com"}`}
                  className="text-foreground font-semibold underline underline-offset-2"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raultz.com"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                <span>ACCEPTING NEW COMMISSIONS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
