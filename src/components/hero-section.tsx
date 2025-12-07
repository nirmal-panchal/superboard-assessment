"use client";

import Users from "@/app/lib/users";
import { ChevronLeft, Gift } from "lucide-react";
import Image from "next/image";
import DefxIcon from "@/app/lib/defx-icon";

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[400px] md:h-[400px]"
      style={{
        background:
          "linear-gradient(180deg, #4948FF 0%, rgba(73, 72, 255, 0) 100%)",
        backdropFilter: "blur(120px)",
      }}
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-4 md:px-20 pt-6 md:pt-10">
        <button
          className="flex items-center gap-1 h-8 px-3 py-2 rounded-full text-white hover:opacity-80 transition-opacity border"
          style={{
            background: "#FFFFFF1A",
            borderColor: "#00000005",
          }}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm font-medium hidden md:inline">Back</span>
        </button>
        <button
          className="flex items-center gap-1 h-8 px-3 py-2 rounded-full text-white hover:opacity-80 transition-opacity border"
          style={{
            background: "#FFFFFF1A",
            borderColor: "#00000005",
          }}
        >
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-7 px-4 md:px-[280px] pt-6 md:pt-12 pb-6">
        {/* Image */}
        <div className="relative w-48 h-48 md:w-52 md:h-52 shrink-0">
          <Image
            src="/hero.png"
            alt="Defx Hero"
            width={211}
            height={211}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-white text-center md:text-left">
          {/* Reward Badge */}
          <div
            className="inline-flex items-center border-black/20 gap-1 h-10 rounded-full px-3 py-2 mb-4 border"
            style={{
              background: "#FFFFFF80",
            }}
          >
            <Gift className="h-4 w-4 text-[#404040]" />
            <span className="text-xs font-bold leading-[16.54px] text-[#404040]">
              $10000 USDC + Boosted Defx Points
            </span>
            <ChevronLeft className="h-4 w-4 rotate-180 text-[#404040]" />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold leading-8 mb-4 flex items-center justify-center md:justify-start gap-2 text-[#262626]">
            Defx’s Fee-Free Frenzy ✨<span className="text-2xl">✨</span>
          </h1>

          {/* Description */}
          <p className="text-sm font-medium leading-[150%] mb-6 text-[#262626] px-4 md:px-0 md:max-w-md">
            Join Defx’s Fee-Free Frenzy — trade perpetuals on a purpose-built
            CLOB L1 with zero fees and sub-millisecond execution.
          </p>

          {/* Stats - Hidden on mobile for cleaner look */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users />
              <span className="font-bold text-[#262626]">27,213 chads</span>
            </div>
            <span className="text-[#262626]">•</span>
            <div className="flex items-center gap-2">
              <DefxIcon />
              <span className="font-bold text-[#262626]">Defx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
