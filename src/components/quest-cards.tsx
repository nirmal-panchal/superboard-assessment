"use client";

import Coins from "@/app/lib/coins";
import Quest2 from "@/app/lib/quest-2";
import Quest3 from "@/app/lib/quest-3";
import TvIcon from "@/app/lib/tv-icon";
import { Lock, ChevronRight } from "lucide-react";

export function QuestCards() {
  return (
    <section className="w-full px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
        {/* Card 1 - Mint Campaign Pass */}
        <div className="rounded-2xl overflow-hidden bg-[#FAFAFA]">
          {/* Card Header with Gradient */}
          <div
            className="h-[160px] md:h-[200px] flex items-center justify-center relative px-4"
            style={{
              background:
                "linear-gradient(180deg, #D8FF98 0%, rgba(216, 255, 152, 0) 100%)",
              backdropFilter: "blur(120px)",
            }}
          >
            <div className="flex items-center justify-center max-w-full">
              <TvIcon />
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold leading-6 md:leading-7 tracking-tight text-[#404040] mb-3 md:mb-4">
              1. Mint Campaign Pass
            </h3>
            <p className="text-xs md:text-sm font-medium leading-5 text-[#737373] mb-8 md:mb-12">
              Mint the campaign pass, make a bridge, and get ranked by your
              bridging amount — minimum $5 to appear on the leaderboard.
            </p>

            {/* Footer */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Coins />
                <span className="text-sm font-bold text-[#404040]">
                  50 SUPR
                </span>
              </div>

              <button className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#7C3DC8] text-white rounded-full text-sm font-bold hover:bg-[#6334A2] transition-colors">
                Mint Campaign Pass
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Bridge Assets (Placeholder) */}
        <div className="rounded-2xl overflow-hidden bg-[#FAFAFA]">
          <div
            className="h-[160px] md:h-[200px] flex items-center justify-center relative px-4"
            style={{
              background:
                "linear-gradient(180deg, #FFA5FF 0%, rgba(255, 165, 255, 0) 100%)",
              backdropFilter: "blur(120px)",
            }}
          >
            <div className="flex items-center justify-center max-w-full">
              <Quest2 />
            </div>
          </div>

          <div className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold leading-6 md:leading-7 tracking-tight text-[#404040] mb-3 md:mb-4">
              2. Bridge Assets
            </h3>
            <p className="text-xs md:text-sm font-medium leading-5 text-[#737373] mb-8 md:mb-12">
              Mint the campaign pass, make a bridge, and get ranked by your
              bridging amount — minimum $5 to appear on the leaderboard.
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Coins />
                <span className="text-sm font-bold text-[#404040]">
                  50 SUPR
                </span>
              </div>

              <button className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#7C3DC8] text-white rounded-full text-sm font-bold hover:bg-[#6334A2] transition-colors">
                <Lock className="h-4 w-4" />
                Bridge Assets
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Trade (Placeholder) */}
        <div className="rounded-2xl overflow-hidden bg-[#FAFAFA]">
          <div
            className="h-[160px] md:h-[200px] flex items-center justify-center relative px-4"
            style={{
              background:
                "linear-gradient(180deg, #68FF9F 0%, rgba(34, 197, 94, 0) 100%)",
              backdropFilter: "blur(120px)",
            }}
          >
            <div className="flex items-center justify-center max-w-full">
              <Quest3 />
            </div>
          </div>

          <div className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold leading-6 md:leading-7 tracking-tight text-[#404040] mb-3 md:mb-4">
              3. Trade
            </h3>
            <p className="text-xs md:text-sm font-medium leading-5 text-[#737373] mb-8 md:mb-12">
              Mint the campaign pass, make a bridge, and get ranked by your
              bridging amount — minimum $5 to appear on the leaderboard.
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Coins />
                <span className="text-sm font-bold text-[#404040]">
                  50 SUPR
                </span>
              </div>

              <button className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#7C3DC8] text-white rounded-full text-sm font-bold hover:bg-[#6334A2] transition-colors">
                <Lock className="h-4 w-4" />
                Trade
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
