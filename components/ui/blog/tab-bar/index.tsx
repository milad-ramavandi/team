"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { tagsList } from "../../../../data/blog/tags";
import { tabs } from "../../../../data/blog/tabs";
import ChevronRightIcon from "../../svg/chevron-right";

export default function TabBar() {
  const searchParams = useSearchParams();
  const currentTag = tagsList.find(
    (tag) => tag.id === searchParams.get("tag_id")
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const pathname = usePathname();
  const activeTab = searchParams.get("category_id") || "all";

  const checkForScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth + 1 < scrollWidth);
  };

  useEffect(() => {
    checkForScrollPosition();
    const handleResize = () => {
      checkForScrollPosition();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (offset: number) => {
    scrollRef?.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <>
      <div className="position-relative w-100 my-2 my-lg-0">
        {canScrollLeft && (
          <button
            onClick={() => scroll(-150)}
            className="position-absolute start-0 top-0 h-100 scroll"
          >
            <ChevronRightIcon
              isChevronRight={false}
              className="position-absolute opacity-75 mil-a1"
            />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={checkForScrollPosition}
          className="d-flex gap-2 overflow-auto py-3 px-2 tab-bar"
        >
          {tabs.map((tab) => {
            const isActive =
              !currentTag && (activeTab === tab?.id || activeTab === tab.value);
            return (
              <Link
                key={tab.value}
                href={{
                  pathname,
                  query: tab?.value === "all" ? {} : { category_id: tab?.id },
                }}
                scroll={false}
                className={`fw-bold rounded-pill px-3 py-1 me-2 ${
                  isActive
                    ? "mil-a1-bg text-white shadow active-tab tab"
                    : "text-white-60"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
          {currentTag && (
            <Link
              href={`/blog?tag_id=${currentTag.id}`}
              className="fw-bold rounded-pill px-3 py-1 mil-a1-bg text-white-60 shadow current-tag"
            >
              {currentTag.label}
            </Link>
          )}
        </div>
        {canScrollRight && (
          <button
            onClick={() => scroll(150)}
            className="position-absolute end-0 top-0 h-100 scroll"
          >
            <ChevronRightIcon
              isChevronRight
              className="position-absolute mil-a1 opacity-75"
            />
          </button>
        )}
      </div>
    </>
  );
}
