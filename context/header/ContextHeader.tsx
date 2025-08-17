"use client"
import React, { createContext, useState } from "react";

interface IContextHeader {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const ContextHeader = createContext<IContextHeader | null>(null);

export const ContextHeaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <ContextHeader.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </ContextHeader.Provider>
  );
};
