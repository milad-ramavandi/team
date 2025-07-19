"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";

const pathnames = ["/", "/about", "/blog", "/contact"];

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isNotFound = pathnames.includes(pathname);
  return (
    <>
      <Header isNotFound={isNotFound} />
      {children}
      {isNotFound && <Footer />}
    </>
  );
};

export default ClientLayout;
