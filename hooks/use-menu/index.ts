"use client";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onCloseMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY ?? 10;
      setIsScrolled(scrollTop > 10);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { isScrolled, isMenuOpen, onCloseMenu };
};

export default useMenu;
