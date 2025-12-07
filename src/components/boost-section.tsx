"use client";

import Fire from "@/app/lib/fire";
import BoostOuterBg from "@/app/lib/boost/boost-outer-bg";
import BoostInnerBg from "@/app/lib/boost/boost-inner-bg";
import Rectangle from "@/app/lib/boost/rectangle";
import Strips from "@/app/lib/boost/strips";

export function BoostSection() {
  return (
    <section className="w-full px-4 md:px-10 py-6 md:py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-7">
        {/* Fire Icon */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#FEE2E2] flex items-center justify-center shrink-0">
          <Fire />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold leading-7 md:leading-8 text-[#404040]">Boost</h2>
          <p className="text-xs md:text-sm font-medium text-neutral-600">
            Get started by Minting the Campaign Pass
          </p>
        </div>
      </div>

      {/* Boost Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden flex h-[120px] md:h-[135px]">
          {/* Left Section - Vectors and 1.25x */}
          <div
            className="w-28 md:w-36 h-[120px] md:h-[135px] flex items-center justify-center relative"
            style={{ background: "#F0BAFF" }}
          >
            {/* Layered Boost Backgrounds */}
            <div className="relative flex items-center justify-center scale-75 md:scale-100">
              {/* Outer Background */}
              <div className="absolute">
                <BoostOuterBg />
              </div>

              {/* Inner Background with Rectangle */}
              <div className="absolute flex items-center justify-center">
                <BoostInnerBg />

                {/* Rectangle with 1.25x Text */}
                <div className="absolute flex items-center justify-center">
                  <Rectangle />
                  <span
                    className="absolute text-[28px] md:text-[35.38px] font-bold leading-[34px] md:leading-[42.46px] text-center"
                    style={{ color: "#A349CD" }}
                  >
                    1.25x
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Strips and Text */}
          <div
            className="flex-1 h-[120px] md:h-[135px] flex flex-col items-center justify-center relative px-3 md:px-4"
            style={{ background: "#FD92FF" }}
          >
            {/* Strips at top */}
            <div className="absolute top-0 left-0 w-full h-[21px]">
              <Strips />
            </div>

            {/* Text Content */}
            <p className="text-xs md:text-sm font-medium leading-4 md:leading-5 text-center text-[#000000] relative z-10 mt-4">
              Do a min volume of 10,000 USD every week for a min of 4 weeks to
              apply this boost
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden flex h-[120px] md:h-[135px]">
          {/* Left Section - Vectors and 1.25x */}
          <div
            className="w-28 md:w-36 h-[120px] md:h-[135px] flex items-center justify-center relative"
            style={{ background: "#F0BAFF" }}
          >
            {/* Layered Boost Backgrounds */}
            <div className="relative flex items-center justify-center scale-75 md:scale-100">
              {/* Outer Background */}
              <div className="absolute">
                <BoostOuterBg />
              </div>

              {/* Inner Background with Rectangle */}
              <div className="absolute flex items-center justify-center">
                <BoostInnerBg />

                {/* Rectangle with 1.25x Text */}
                <div className="absolute flex items-center justify-center">
                  <Rectangle />
                  <span
                    className="absolute text-[28px] md:text-[35.38px] font-bold leading-[34px] md:leading-[42.46px] text-center"
                    style={{ color: "#A349CD" }}
                  >
                    1.25x
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Strips and Text */}
          <div
            className="flex-1 h-[120px] md:h-[135px] flex flex-col items-center justify-center relative px-3 md:px-4"
            style={{ background: "#FD92FF" }}
          >
            {/* Strips at top */}
            <div className="absolute top-0 left-0 w-full h-[21px]">
              <Strips />
            </div>

            {/* Text Content */}
            <p className="text-xs md:text-sm font-medium leading-4 md:leading-5 text-center text-[#000000] relative z-10 mt-4">
              Do a min volume of 10,000 USD every week for a min of 4 weeks to
              apply this boost
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl overflow-hidden flex h-[120px] md:h-[135px]">
          {/* Left Section - Vectors and 1.25x */}
          <div
            className="w-28 md:w-36 h-[120px] md:h-[135px] flex items-center justify-center relative"
            style={{ background: "#F0BAFF" }}
          >
            {/* Layered Boost Backgrounds */}
            <div className="relative flex items-center justify-center scale-75 md:scale-100">
              {/* Outer Background */}
              <div className="absolute">
                <BoostOuterBg />
              </div>

              {/* Inner Background with Rectangle */}
              <div className="absolute flex items-center justify-center">
                <BoostInnerBg />

                {/* Rectangle with 1.25x Text */}
                <div className="absolute flex items-center justify-center">
                  <Rectangle />
                  <span
                    className="absolute text-[28px] md:text-[35.38px] font-bold leading-[34px] md:leading-[42.46px] text-center"
                    style={{ color: "#A349CD" }}
                  >
                    1.25x
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Strips and Text */}
          <div
            className="flex-1 h-[120px] md:h-[135px] flex flex-col items-center justify-center relative px-3 md:px-4"
            style={{ background: "#FD92FF" }}
          >
            {/* Strips at top */}
            <div className="absolute top-0 left-0 w-full h-[21px]">
              <Strips />
            </div>

            {/* Text Content */}
            <p className="text-xs md:text-sm font-medium leading-4 md:leading-5 text-center text-[#000000] relative z-10 mt-4">
              Do a min volume of 10,000 USD every week for a min of 4 weeks to
              apply this boost
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
