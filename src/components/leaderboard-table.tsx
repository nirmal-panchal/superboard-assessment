"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Rank1 from "@/app/lib/rank/rank1";
import Rank2 from "@/app/lib/rank/rank2";
import Rank3 from "@/app/lib/rank/rank3";

const leaderboardData = [
  {
    rank: 1,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 1,
    bridgedVolume: "$250.00",
  },
  {
    rank: 2,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 1,
    bridgedVolume: "$150.00",
  },
  {
    rank: 3,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 1,
    bridgedVolume: "$350.00",
  },
  {
    rank: 4,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 0,
    bridgedVolume: "$450.00",
  },
  {
    rank: 5,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 0,
    bridgedVolume: "$550.00",
  },
  {
    rank: 6,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 0,
    bridgedVolume: "$200.00",
  },
  {
    rank: 7,
    user: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
    defxPointsBoost: 0,
    bridgedVolume: "$300.00",
  },
];

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Rank1 />
        <span className="absolute text-xs font-bold text-white">{rank}</span>
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Rank2 />
        <span className="absolute text-xs font-bold text-white">{rank}</span>
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Rank3 />
        <span className="absolute text-xs font-bold text-white">{rank}</span>
      </div>
    );
  }
  return <span className="text-sm font-medium text-[#404040]">{rank}</span>;
}

export function LeaderboardTable() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        border: "1px solid #F5F5F5",
      }}
    >
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-60 text-center text-sm font-medium text-[#737373]">
                Rank
              </TableHead>
              <TableHead className="w-[396px] text-sm font-medium text-[#737373]">
                User
              </TableHead>
              <TableHead className="text-center text-sm font-medium text-[#737373]">
                Defx Points Boost
              </TableHead>
              <TableHead className="text-right text-sm font-medium text-[#737373]">
                Bridged Volume
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((row) => (
              <TableRow key={row.rank}>
                <TableCell className="w-60 py-4 text-center">
                  <div className="flex justify-center">
                    <RankBadge rank={row.rank} />
                  </div>
                </TableCell>
                <TableCell className="w-[396px] text-sm font-medium text-[#404040]">
                  {row.user}
                </TableCell>
                <TableCell className="text-sm font-medium text-[#404040] text-center">
                  {row.defxPointsBoost}
                </TableCell>
                <TableCell className="text-sm font-medium text-[#404040] text-right">
                  {row.bridgedVolume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden">
        {leaderboardData.map((row, index) => (
          <div
            key={row.rank}
            className="p-4 border-b border-[#F5F5F5] last:border-b-0"
            style={{ background: "#FFFFFF" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <RankBadge rank={row.rank} />
                <span className="text-xs font-medium text-[#737373]">Rank</span>
              </div>
              <span className="text-sm font-bold text-[#404040]">
                {row.bridgedVolume}
              </span>
            </div>
            <div className="mb-2">
              <p className="text-xs font-medium text-[#737373] mb-1">User</p>
              <p className="text-xs font-medium text-[#404040] truncate">
                {row.user}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-[#737373] mb-1">
                Defx Points Boost
              </p>
              <p className="text-xs font-medium text-[#404040]">
                {row.defxPointsBoost}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Row */}
      <div
        className="w-full py-3 md:py-4 px-4 flex justify-end"
        style={{ background: "#FAFAFA" }}
      >
        <span className="text-xs md:text-sm font-bold text-[#404040]">$2,500.00</span>
      </div>
    </div>
  );
}
