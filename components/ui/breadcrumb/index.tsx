"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();
  return (
    <ul className="mil-breadcrumbs mil-mb60 mil-c-gone">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#.">{pathname.slice(1)?.replace("-", " ")}</Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
