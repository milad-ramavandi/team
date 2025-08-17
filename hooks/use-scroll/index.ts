"use client";
import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  

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
  return { isScrolled };
};

export default useScroll;
