"use client";
import Link from "next/link";
import Menu from "./menu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { texts } from "../../../lib/texts";
import Image from "next/image";
import useMenu from "../../../hooks/use-menu";

export default function Header() {
  const { isScrolled, isMenuOpen, onCloseMenu } = useMenu();
  const pathname = usePathname();
  
  return (
    <>
      <div className="mil-fixed">
        <div
          className={`mil-top-panel-2 ${isMenuOpen && "mil-menu-open"} ${
            isScrolled && !isMenuOpen && "mil-scroll"
          }`}
        >
          <div className="container">
            <div className="mil-left-side mil-tp-transition" id="swupTpLeft">
              <Link href="/" className="mil-logo mil-scroll-to" data-no-swup>
                <Image width={68} height={81} src={"/img/logo.png"} alt="logo" />
              </Link>
            </div>

            <div className={`mil-onepage-nav`} id="swup-opm">
              <ul>
                <li>
                  <Link
                    href="/about"
                    data-no-swup
                    className={`${pathname === "/about" ? "mil-a1" : "mil-m1"}`}
                  >
                    {texts.header.items[0]}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className={`${
                      pathname === "/portfolio" ? "mil-a1" : "mil-m1"
                    }`}
                    data-no-swup
                  >
                    {texts.header.items[1]}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`${
                      pathname.startsWith("/blog") ? "mil-a1" : "mil-m1"
                    }`}
                    data-no-swup
                  >
                    {texts.header.items[2]}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`${pathname === "/services" ? "mil-a1" : "mil-m1"}`}
                    data-no-swup
                  >
                    {texts.header.items[3]}
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`mil-buttons-tp-frame mil-c-gone ${
                isMenuOpen && "mil-active"
              }`}
            >
              <div className="mil-buttons">
                <Link href="/contact-us" className="mil-tp-btn">
                  <i className="fal fa-envelope"></i>
                </Link>
                <div className="mil-tp-btn">
                  <div
                    className={`mil-menu-btn ${isMenuOpen && "mil-active"}`}
                    onClick={onCloseMenu}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu/>
      </div>
    </>
  );
}
