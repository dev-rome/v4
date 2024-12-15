import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-light dark:bg-dark min-h-screen">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
