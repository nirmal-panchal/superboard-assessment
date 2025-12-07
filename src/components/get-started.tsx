"use client";

import { Play } from "lucide-react";

export function GetStarted() {
  return (
    <section className="w-full px-4 md:px-10 py-5 md:py-7">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side - Title and Description */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Play Icon */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0">
            <Play className="h-5 w-5 md:h-6 md:w-6 text-[#16A34A] fill-[#16A34A]" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold leading-7 md:leading-8 text-[#404040]">
              Get Started
            </h2>
            <p className="text-xs md:text-sm font-medium text-neutral-600">
              Get started by Minting the Campaign Pass
            </p>
          </div>
        </div>

        {/* Right Side - Trade Button */}
        <button className="w-full md:w-auto px-5 py-3 bg-[#7C3DC8] text-white rounded-full text-sm font-bold hover:bg-[#6334A2] transition-colors">
          Trade
        </button>
      </div>
    </section>
  );
}
