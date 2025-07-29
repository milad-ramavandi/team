"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ArrowRight from "../../svg/arrow-right";

type Props = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  const redirect = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      newParams.delete("paged");
    } else {
      newParams.set("paged", page.toString());
    }
    const query = newParams.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}#tab_search_bar`);

    // return `${pathname}${query ? `?${query}` : ""}`;
  };

  const createPagination = () => {
    const pages: (number | "...")[] = [];

    // display all pages, when totalPages is low
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // in front of the list
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    }
    // in end of the list
    else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    }
    // in middle of the list
    else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  const pages = createPagination();

  return (
    <>
      <div className="pagination-container">
        <button
          onClick={() => redirect(currentPage - 1)}
          className={`fs-medium pagination-nav-button ${!canGoBack ? "disabled" : ""}`}
          disabled={!canGoBack}
        >
          <ArrowRight isArrowRight={false} />
          <p className="nav-text">Previous</p>
        </button>
        <div className="pagination-pages">
          {pages.map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                className="pagination-dots"
              >
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => redirect(page)}
                className={`pagination-page-button fs-bold ${
                page === currentPage ? "active" : ""
              }`}
              >
                <p
                >
                  {page}
                </p>
              </button>
            )
          )}
        </div>
        <p
          className={`pagination-current-mobile fs-bold`}
        >
          {currentPage}
        </p>

        <button
          onClick={() => redirect(currentPage + 1)}
          className={`fs-medium pagination-nav-button ${!canGoForward ? "disabled" : ""}`}
          disabled={!canGoForward}
        >
          <p className="nav-text">Next</p>
          <ArrowRight isArrowRight />
        </button>
      </div>
    </>
  );
}
