"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
};
