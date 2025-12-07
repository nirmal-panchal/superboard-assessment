"use client";

import { Lock, ChevronRight } from "lucide-react";
import ScoreBg from "@/app/lib/rank/score-bg";

export function RankCard() {
  return (
    <div
      className="w-full min-h-[104px] rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between p-4 md:px-6 md:py-0 gap-4 md:gap-0"
      style={{
        background: "#FAFAFA",
        border: "1px solid #81818114",
      }}
    >
      {/* Rank Section */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#FEE2E2] flex items-center justify-center shrink-0">
          <Lock className="h-5 w-5 md:h-6 md:w-6 text-[#EF4444]" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-bold leading-5 md:leading-6 text-[#404040]">#340</h3>
          <p className="text-xs md:text-sm font-medium text-[#737373]">
            Your leaderboard rank
          </p>
        </div>
      </div>

      {/* Divider - Hidden on mobile */}
      <div className="hidden md:block h-12 w-px bg-gray-300" />

      {/* Stats Grid - Mobile: 2 columns, Desktop: inline */}
      <div className="grid grid-cols-2 md:contents gap-4 md:gap-0">
        {/* Volume Traded Section */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-base md:text-xl font-bold leading-5 md:leading-6 text-[#404040]">
            $213,129
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#737373]">Volume Traded</p>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-12 w-px bg-gray-300" />

        {/* Leaderboard Refresh Section */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-base md:text-xl font-bold leading-5 md:leading-6 text-[#404040]">
            2 : 24 : 14
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#737373]">
            Leaderboard Refresh
          </p>
        </div>
      </div>

      {/* How to Rank Higher Button */}
      <div className="relative w-full md:w-[268px] h-[42px] md:h-[104px] flex items-center">
        <div className="hidden md:block absolute top-0 left-[26px] pointer-events-none">
          <ScoreBg />
        </div>
        <button
          className="relative z-10 w-full md:w-[169px] h-[42px] rounded-full flex items-center justify-center gap-[3px] px-5 md:px-0 md:pl-5 md:pr-3 py-3 md:ml-24"
          style={{
            background: "#34C759",
            border: "1px solid #0DA83A",
          }}
        >
          <span
            className="text-xs font-semibold tracking-tight"
            style={{
              lineHeight: "15px",
              color: "#171717",
            }}
          >
            How to rank higher
          </span>
          <ChevronRight className="h-4 w-4 text-[#171717]" />
        </button>
      </div>
    </div>
  );
}
