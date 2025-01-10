import React, { type ReactNode } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-5xl mx-auto">
        <Header />

        <main className="flex-grow container mx-auto py-4 px-6">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
