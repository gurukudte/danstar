"use client";

import { ReactNode, useEffect, useState } from "react";
import { LayoutDashboard, Clock, Users, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { User as NextAuthUser } from "next-auth";
import { useSession } from "next-auth/react";

import { NavItem } from "./components/NavItem";
import { Header } from "./components/Header";

enum Role {
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface Session {
  user: {
    id: string;
    role: Role;
    accessToken: string;
  } & NextAuthUser;
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    setActiveView(segments[segments.length - 1] || "dashboard");
  }, [pathname]);

  useEffect(() => {
    if (status === "authenticated") {
      const userSession = session as Session | null;
      setIsUser(userSession?.user?.role === Role.USER);
    } else {
      setIsUser(false);
    }
  }, [session, status]);

  const navItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      path: "/dashboard",
      view: "dashboard",
      show: true,
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Leads",
      path: "/dashboard/leads",
      view: "leads",
      show: !isUser,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Profile",
      path: "/dashboard/profile",
      view: "profile",
      show: true,
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 ${
          sidebarOpen ? "w-64" : "w-20"
        } h-screen transition-all duration-300 ease-in-out bg-background border-r shadow-sm ${
          mobileSidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b shadow-sm">
          {sidebarOpen ? (
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Danstar
              </span>
            </Link>
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">ST</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hidden lg:block"
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="p-4 flex flex-col justify-between h-[calc(100%-4rem)]">
          <ul className="space-y-2">
            {navItems
              .filter((item) => item.show)
              .map((item) => (
                <NavItem
                  key={item.path}
                  icon={item.icon}
                  label={item.label}
                  active={activeView === item.view}
                  onClickAction={() => router.push(item.path)}
                  sidebarOpen={sidebarOpen}
                />
              ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        } transition-all duration-300 ease-in-out`}
      >
        <Header
          sidebarOpen={sidebarOpen}
          activeView={activeView}
          toggleMobileSidebarAction={toggleMobileSidebar}
        />

        <main className="flex-1 overflow-y-auto p-4 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
