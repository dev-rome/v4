import React, { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-light text-light-text dark:bg-dark dark:text-dark-text">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
