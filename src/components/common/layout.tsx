import React, { type ReactNode } from "react";
import Footer from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-h-screen overflow-hidden">
      <div className="flex flex-grow flex-col lg:flex-row overflow-hidden">
        <Header />

        <main className="flex-grow container mx-auto p-10 overflow-scroll">
          <div className="mx-auto max-w-4xl ov">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
