import React, { type ReactNode } from "react";
import Footer from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto lg:max-h-screen overflow-hidden">
      <div className="flex flex-grow flex-col lg:flex-row overflow-hidden">
        <Header />

        <main className="flex-grow mx-auto lg:p-10 py-4 overflow-scroll w-full">
          <div className="mx-auto w-full max-w-4xl px-6">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
