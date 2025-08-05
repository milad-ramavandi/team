"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TelegramIcon from "../../svg/telegram";
import DocumentDuplicateIcon from "../../svg/document-duplicate";

const BlogShare = () => {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const fullUrl = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="d-flex align-items-center gap-5 position-relative">
      <span className="text-white">Share:</span>
      <div className="d-flex align-items-center gap-3">
        <Link
          href={`https://t.me/share/url?url=https://chatoshi.ai${pathname}`}
          target="_blank"
        >
          <TelegramIcon />
        </Link>
        <button
          onClick={handleCopy}
          className="container-document-icon"
        >
          <DocumentDuplicateIcon />
        </button>
      </div>
      {copied && (
        <div className="position-absolute bottom-100 end-0 mb-3 opacity-75 text-black text-sm rounded px-3 py-1 text-white copied">
          Copied!
        </div>
      )}
    </div>
  );
};

export default BlogShare;
