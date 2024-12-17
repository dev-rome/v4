import React, { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-light-text dark:text-dark-text flex min-h-screen flex-col bg-light dark:bg-dark">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
