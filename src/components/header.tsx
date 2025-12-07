"use client";

import { Search } from "lucide-react";
import Paw from "@/app/lib/paw";
import Logo from "@/app/lib/logo";
import SidebarTriggerIcon from "@/app/lib/sidebar-trigger";
import { useSidebar } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

export function Header() {
  const { toggleSidebar } = useSidebar();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      setIsAnimating(true);
    }
  }, [isSearchOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsSearchOpen(false), 200); // Match animation duration
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
        {/* Left Side - Sidebar Trigger (Mobile) + Search Bar (Desktop) */}
        <div className="flex items-center gap-3 flex-1">
          {/* Sidebar Trigger - Mobile only */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-0 hover:opacity-80 transition-opacity"
            aria-label="Toggle Sidebar"
          >
            <SidebarTriggerIcon />
          </button>

          {/* Logo - Mobile only */}
          <div className="md:hidden">
            <Logo />
          </div>

          {/* Search Button - Desktop only */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex relative items-center gap-[7.11px] bg-[#F4F4F5] rounded-full px-[17.78px] py-[10.67px] max-w-[375px] flex-1 hover:bg-[#ECECED] transition-colors"
          >
            <Search className="h-5 w-5 text-[#A8A29E]" />
            <span className="flex-1 text-left text-sm text-[#A8A29E] font-medium">
              Search Quests
            </span>
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Search Icon - Mobile only */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Search className="h-5 w-5 text-[#A8A29E]" />
          </button>

          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#D4D4D4] rounded-full text-sm font-medium text-[#737373] hover:bg-gray-50 transition-colors">
            <Paw />
            <span>Unlock Daily Treats</span>
          </button>

          <button className="px-3 py-2 bg-[#9AF6C1] text-black border border-[#86EFAC] rounded-full text-sm font-medium hover:bg-[#86EFAC] transition-colors">
            Sign In
          </button>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 transition-opacity duration-200 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            className={`bg-white rounded-2xl w-full max-w-2xl mx-4 shadow-xl transition-all duration-200 ${
              isAnimating
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <Search className="h-5 w-5 text-[#A8A29E]" />
              <input
                type="text"
                placeholder="Search Campaigns, quests and Loops"
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-600 placeholder:text-[#A8A29E]"
                autoFocus
              />
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Search Results */}
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-3">Campaigns (5)</div>
              {/* Add your search results here */}
              <div className="text-sm text-gray-400 py-8 text-center">
                Start typing to search...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
