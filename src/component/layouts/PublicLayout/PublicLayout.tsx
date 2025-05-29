import React from "react";
import PublicLayoutNavbar from "./PublicLayoutNavbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="">
      <PublicLayoutNavbar />
      {children}
    </div>
  );
};
