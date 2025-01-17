import React, { type ReactNode } from "react";
import Footer from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto lg:max-h-screen overflow-hidden lg:flex-row">
      <Header />

      <div className="flex-grow overflow-scroll">
        <main className="mx-auto lg:py-10 py-4  w-full">
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
