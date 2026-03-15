"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@/hooks/use-media-query";

// Hook

const useFunctionalities = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => {
    if (!isMobile) setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    if (!isMobile) setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    menuRef,
    buttonRef,
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    isMobileMenuOpen,
    isDropdownOpen,
    animateMobileMenu: isMobileMenuOpen ? "open" : "close",
    animateDropdownMenu: isDropdownOpen ? "open" : "close",
    animateDropdownMenuIcon: isDropdownOpen ? "rotated" : "initial",
  };
};

// Nav link style──

const linkClass =
  "relative font-mono text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase transition-colors hover:text-white " +
  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#d3af30] after:transition-all hover:after:w-full";

// Navbar─

export function Navbar() {
  const ua = useFunctionalities();

  return (
    <header className="fixed inset-x-0 top-0 z-[999] w-screen overflow-x-hidden">
      {/* thin gold top bar */}
      <div className="h-[2px] w-full bg-[#d3af30]" />

      {/* main bar */}
      <nav
        className="flex w-full items-center justify-between bg-[#181818]/95 px-6 backdrop-blur-md md:px-10 lg:px-14"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 py-3">
          <img
            loading="lazy"
            src="/almanab.svg"
            className="h-8 md:h-12"
            alt="Almanab Logo"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={`${linkClass} px-4 py-6`}>
            Home
          </Link>
          <Link to="/services" className={`${linkClass} px-4 py-6`}>
            Services
          </Link>
          <Link to="/project-cases" className={`${linkClass} px-4 py-6`}>
            Project Cases
          </Link>
          <Link to="/about-us" className={`${linkClass} px-4 py-6`}>
            ABOUT
          </Link>

          {/* About dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={ua.openOnDesktopDropdownMenu}
            onMouseLeave={ua.closeOnDesktopDropdownMenu}
          >
            <button
              onClick={ua.openOnMobileDropdownMenu}
              className={`${linkClass} flex cursor-pointer items-center gap-1.5 border-none bg-transparent px-4 py-6`}
            >
              <span>About</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={ua.animateDropdownMenuIcon}
                transition={{ duration: 0.25 }}
                className="inline-flex"
              >
                <RxChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {ua.isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-1"
                >
                  <div
                    className="min-w-[160px] overflow-hidden bg-[#1e1e1e] py-1"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Link
                      to="/about-us"
                      className="hover:text-gold block px-5 py-3 font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase transition-colors hover:bg-[#d3af30]/10"
                    >
                      About Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#d3af30] px-6 py-3 font-mono text-[10px] font-bold tracking-[0.18em] text-[#181818] uppercase transition-all hover:bg-[#e8c84a]"
          >
            Contact &amp; Quote
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={ua.buttonRef}
          onClick={ua.toggleMobileMenu}
          className="flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {ua.isMobileMenuOpen ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
              >
                <X color="white" size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
              >
                <Menu color="white" size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {ua.isMobileMenuOpen && (
          <motion.div
            ref={ua.menuRef}
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-full overflow-x-hidden bg-[#181818] lg:hidden"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col px-6 pt-2 pb-6">
              {/* Rule */}
              <div className="mb-4 h-px w-full bg-white/[0.06]" />

              <Link
                to="/"
                onClick={ua.toggleMobileMenu}
                className="border-b border-white/[0.04] py-3 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={ua.toggleMobileMenu}
                className="border-b border-white/[0.04] py-3 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase transition-colors hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/project-cases"
                onClick={ua.toggleMobileMenu}
                className="border-b border-white/[0.04] py-3 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase transition-colors hover:text-white"
              >
                Project Cases
              </Link>

              {/* About accordion */}
              <div className="border-b border-white/[0.04]">
                <button
                  onClick={ua.openOnMobileDropdownMenu}
                  className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-3 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase transition-colors hover:text-white"
                >
                  <span>About</span>
                  <motion.span
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    animate={ua.animateDropdownMenuIcon}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <RxChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {ua.isDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <Link
                        to="/about-us"
                        onClick={ua.toggleMobileMenu}
                        className="block py-3 pl-4 font-mono text-[10px] tracking-[0.14em] text-[#d3af30]/60 uppercase transition-colors hover:text-[#d3af30]"
                      >
                        — About Us
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={ua.toggleMobileMenu}
                className="mt-6 flex items-center justify-center gap-2 bg-[#d3af30] py-4 font-mono text-[11px] font-bold tracking-[0.2em] text-[#181818] uppercase transition-colors hover:bg-[#e8c84a]"
              >
                Contact &amp; Quote ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
