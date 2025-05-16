"use client";
import { FiMenu, FiChevronDown, FiBell, FiLogOut } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface IHeaderProps {
  sidebarOpen: boolean;
  activeView: string;
  toggleMobileSidebarAction: () => void;
}

export function Header({
  sidebarOpen,
  activeView,
  toggleMobileSidebarAction,
}: IHeaderProps) {
  const { data: session } = useSession();
  const [notificationCount] = useState(3); // Example notification count

  // const handleLinkClick = (href: string) => {
  //   router.push(href);
  //   document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  // };

  return (
    <header className="bg-background  shadow-sm z-10 sticky top-0">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button
            onClick={toggleMobileSidebarAction}
            className="p-1 rounded-md text-secondary  lg:hidden"
            aria-label="Toggle sidebar"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          <h2 className="text-secondary ml-4 text-lg font-medium capitalize">
            {activeView}
          </h2>
        </div>

        {session?.user && (
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="p-1 rounded-full text-secondary relative"
                  aria-label="Notifications"
                >
                  <FiBell className="w-5 h-5 text-secondary" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64" align="end">
                <div className="p-2">
                  <h3 className="font-medium text-sm">Notifications</h3>
                  <div className="mt-2 space-y-1">
                    {notificationCount > 0 ? (
                      Array.from({ length: notificationCount }).map((_, i) => (
                        <div key={i} className="text-sm p-2">
                          Notification {i + 1}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 p-2">
                        No new notifications
                      </p>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center cursor-pointer gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-background font-bold">
                    {session.user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  {sidebarOpen && (
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-secondary ">
                        {session.user.name}
                      </span>
                      <FiChevronDown className="w-4 h-4 ml-1 text-secondary" />
                    </div>
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-1" align="end">
                <div className="cursor-pointer">{/* <ProfileDialog /> */}</div>
                <button
                  className="w-full bg-background flex items-center p-2 text-sm rounded text-red-600 hover:bg-red-50 cursor-pointer border border-accent-foreground"
                  onClick={() => signOut({ callbackUrl: "/auth/login" })}
                >
                  <FiLogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </button>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </header>
  );
}
