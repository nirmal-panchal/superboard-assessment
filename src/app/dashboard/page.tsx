import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { GetStarted } from "@/components/get-started";
import { QuestCards } from "@/components/quest-cards";
import { BoostSection } from "@/components/boost-section";
import { RankCard } from "@/components/rank-card";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { AboutSection } from "@/components/about-section";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider
      defaultOpen={false}
      style={
        {
          "--sidebar-width": "15rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <Header />
        <HeroSection />
        <GetStarted />
        <QuestCards />
        <BoostSection />
        <div className="px-4 md:px-10 py-5 md:py-7">
          <RankCard />
        </div>
        <div className="px-4 md:px-10 pb-6 md:pb-10">
          <LeaderboardTable />
        </div>
        <div className="px-4 md:px-10 pt-8 md:pt-12">
          <AboutSection />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
