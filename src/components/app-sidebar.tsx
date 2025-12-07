"use client";

import * as React from "react";
import {
  Sparkles,
  BarChart3,
  Bookmark,
  Play,
  HelpCircle,
  Sun,
  ChevronUp,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import SuperBroadLogo from "@/app/lib/logo";
import CustomSidebarTrigger from "@/app/lib/sidebar-trigger";
// Navigation data matching the design
const navItems = [
  {
    title: "Guests",
    icon: Sparkles,
    url: "#",
    isActive: true,
  },
  {
    title: "Leaderboard",
    icon: BarChart3,
    url: "#",
  },
  {
    title: "Your activity",
    icon: Bookmark,
    url: "#",
  },
  {
    title: "Mini Games",
    icon: Play,
    url: "#",
  },
];

const footerItems = [
  {
    title: "Support",
    icon: HelpCircle,
    url: "#",
  },
  {
    title: "Light Mode",
    icon: Sun,
    url: "#",
  },
];

// Custom trigger button component
function TriggerButton() {
  const { toggleSidebar, state } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors ${
        state === "collapsed" ? "cursor-e-resize" : "cursor-w-resize"
      }`}
      aria-label="Toggle Sidebar"
    >
      <CustomSidebarTrigger />
    </button>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Bottom Sheet - Only render on mobile */}
      {isMobile && (
        <>
          {/* Overlay */}
          {openMobile && (
            <div
              className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
              onClick={toggleSidebar}
            />
          )}

          {/* Bottom Sheet */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 bg-[#F4F4F5] rounded-t-3xl transition-transform duration-300 ease-out shadow-xl ${
              openMobile ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              maxHeight: "85vh",
              overflow: "auto",
            }}
          >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Logo */}
        <div className="px-5 py-4">
          <SuperBroadLogo />
        </div>

        {/* Navigation Items */}
        <div className="px-5 pb-6">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`flex items-center gap-2 h-9 px-2 rounded-lg text-sm font-medium ${
                  item.isActive ? "bg-[#E7E7E9]" : ""
                }`}
                onClick={toggleSidebar}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>

          {/* Footer Items */}
          <div className="mt-6 space-y-1">
            {footerItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="flex items-center gap-2 h-9 px-2 rounded-lg text-sm font-medium"
                onClick={toggleSidebar}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </a>
            ))}

            {/* Profile */}
            <button className="flex items-center gap-2 h-14 px-2 rounded-lg w-full mt-2">
              <User className="h-5 w-5" />
              <div className="flex items-center justify-between w-full min-w-0">
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-base font-medium truncate">
                    Profile
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    0x81D...886C7
                  </span>
                </div>
                <ChevronUp className="h-4 w-4 shrink-0" />
              </div>
            </button>
          </div>
        </div>
      </div>
        </>
      )}

      {/* Desktop sidebar - Only render on desktop */}
      {!isMobile && (
        <Sidebar
          {...props}
          collapsible="icon"
          className="border-r border-[#E5E5E5] bg-[#F4F4F5]"
        >
      <SidebarHeader className="group-data-[collapsible=icon]:p-2 p-5 mb-6">
        {/* Expanded state - normal layout */}
        <div className="flex items-center justify-between group-data-[collapsible=icon]:hidden">
          <SuperBroadLogo />
          <TriggerButton />
        </div>

        {/* Collapsed state - centered with hover animation */}
        <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center group/header relative h-12">
          {/* Logo - visible by default when collapsed */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover/header:opacity-0">
            <div className="scale-[0.7] origin-center">
              <SuperBroadLogo />
            </div>
          </div>
          {/* Trigger - visible on hover when collapsed */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/header:opacity-100 transition-opacity duration-200">
            <TriggerButton />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 p-2 pt-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                    className="h-9 text-sm font-medium leading-[15px] data-[active=true]:bg-[#E7E7E9] rounded-lg gap-1 px-2 group-data-[collapsible=icon]:min-w-0 group-data-[collapsible=icon]:w-auto"
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2 border-t border-gray-200 group-data-[collapsible=icon]:px-0">
        <SidebarMenu className="gap-1 group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:items-center">
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="h-9 text-sm font-medium leading-[15px] rounded-lg gap-2 px-2 group-data-[collapsible=icon]:min-w-0 group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:px-0"
              >
                <a href={item.url} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Profile Section */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Profile"
              className="h-14 mt-2 group-data-[collapsible=icon]:mt-0 group-data-[collapsible=icon]:h-9 rounded-lg gap-2 px-2 group-data-[collapsible=icon]:min-w-0 group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:px-0"
            >
              <User className="h-5 w-5" />
              <div className="flex items-center justify-between w-full min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-base font-medium truncate">
                    Profile
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    0x81D...886C7
                  </span>
                </div>
                <ChevronUp className="h-4 w-4 shrink-0" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail className="hover:bg-transparent after:hidden" />
    </Sidebar>
      )}
    </>
  );
}
