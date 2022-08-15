import React from "react";
import Header from "./Header";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="w-[340px] md:w-[720px] lg:w-[980px] m-auto">
        {children}
      </main>
    </>
  );
};

export default Layout;
