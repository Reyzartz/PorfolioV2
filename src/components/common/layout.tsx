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
      <div className="min-h-screen flex flex-col mx-auto h-full">
        <div className="flex flex-grow">
          <Header />

          <main className="flex-grow container mx-auto p-10">
            <div className="mx-auto max-w-4xl">{children}</div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
