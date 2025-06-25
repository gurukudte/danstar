"use client";
import * as React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdmissionPopup from "./components/AdmissionPopup";
import { usePathname } from "next/navigation";

export interface IAppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: IAppLayoutProps) {
const path = usePathname();
  return (
    <>
      {path !== "/pgdm-ai-healthcare" && <NavBar />}
      {children}
      {path !== "/pgdm-ai-healthcare" && (
        <>
          <Footer />
          <AdmissionPopup />
        </>
      )}
    </>
  );
}
