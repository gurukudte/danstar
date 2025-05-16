"use client";
import { ToastProvider } from "@/components/providers/toast-provider";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <ToastProvider />
      </Provider>
    </SessionProvider>
  );
}
