import React, { type ReactNode } from "react";
import Footer from "./footer";
import { SideBar } from "./sideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto lg:max-h-screen overflow-hidden lg:flex-row">
      <SideBar />

      <div className="flex-grow overflow-scroll flex flex-col">
        <main className="mx-auto lg:pt-10 pt-4  w-full flex-grow">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
