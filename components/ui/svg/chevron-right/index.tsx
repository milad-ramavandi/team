"use client";
import React from "react";

const ChevronRightIcon = ({
  isChevronRight,
  className,
  color,
  isCategory
}: {
  isChevronRight: boolean;
  className?: string;
  color?:string;
  isCategory?:boolean
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      style={{
        width: "1.25rem",
        height: "1.25rem",
        transform: isChevronRight ? `${!isCategory && "rotate(0deg) translateY(-50%)"}` : "rotate(180deg) translateY(50%)",
        transition: "transform 0.2s ease-in-out",
        left: `${!isChevronRight && "0"}`,
        right: `${isChevronRight && "0"}`,
        top:"50%",
        color: color && `${color}`
      }}
      // style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default ChevronRightIcon;
