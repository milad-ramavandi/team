"use client";
import React from "react";

const ArrowRight = ({ isArrowRight }: { isArrowRight: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{
        width: "1rem",
        height: "1rem",
        transform: isArrowRight ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default ArrowRight;
