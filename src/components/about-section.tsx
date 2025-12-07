"use client";

import { Flag, Play } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="w-full pt-6 md:pt-10 px-4 md:px-8 pb-6 md:pb-10 rounded-t-4xl gap-7"
      style={{
        background: "#FAFAFA",
        border: "1px solid #F5F5F5",
        borderBottom: "none",
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-bold text-[#404040]">About</h2>
        <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-gray-200 bg-white">
          <Flag className="h-4 w-4 text-gray-600" />
          <span className="text-xs md:text-sm font-medium text-gray-600">
            Report a problem
          </span>
        </button>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base font-normal text-[#404040] mb-5 md:mb-7 leading-relaxed">
        Earn your share of an impressive $3 million in rewards by diving into
        the leading DeFi protocols on Etherlink. Engage in providing liquidity,
        trading, and a variety of other activities. Are you ready to reap the
        benefits and harvest your Apples? 🍏
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
        {/* Superboard Card */}
        <div
          className="rounded-2xl bg-white p-7 flex flex-col items-center justify-center"
          style={{
            border: "1px solid #81818114",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 flex items-center justify-center">
            <Image
              src="/sb-2.png"
              alt="Superboard"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-bold text-[#404040] mb-1">Superboard</h3>
          <p className="text-xs md:text-sm font-medium text-[#737373]">Curator</p>
        </div>

        {/* Timeline Card */}
        <div
          className="rounded-2xl bg-white p-7"
          style={{
            border: "1px solid #81818114",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-bold text-[#404040]">Timeline</h3>
            <span className="text-xs md:text-sm font-medium text-[#7C3AFF] flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
                  stroke="#7C3AFF"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 5v3l2 2"
                  stroke="#7C3AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Coming soon
            </span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div>
              <p className="text-xs font-medium text-[#737373] mb-1">
                Duration
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg font-bold text-[#404040] mb-1">
                21 June 2025
              </p>
              <p className="text-xs font-medium text-[#737373]">Start</p>
            </div>

            <div>
              <p className="text-base md:text-lg font-bold text-[#404040] mb-1">
                28 July 2025
              </p>
              <p className="text-xs font-medium text-[#737373]">End</p>
            </div>
          </div>
        </div>

        {/* How to perform quest Card */}
        <div
          className="rounded-2xl bg-white p-7 flex flex-col"
          style={{
            border: "1px solid #81818114",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          <h3 className="text-base md:text-lg font-bold text-[#404040] mb-2">
            How to perform this quest?
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#737373] mb-auto">
            Watch a tutorial.
          </p>

          <button className="mt-4 md:mt-6 flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-[#E5E5E5] bg-white self-start">
            <Play className="h-4 w-4 text-[#7C3AFF] fill-[#7C3AFF]" />
            <span className="text-xs md:text-sm font-semibold text-[#404040]">
              Play Video
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
