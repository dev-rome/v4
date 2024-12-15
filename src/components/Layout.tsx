import React, { ReactNode } from "react";
import Navigation from "./Navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
