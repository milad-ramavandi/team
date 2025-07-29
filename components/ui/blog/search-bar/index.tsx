"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useDebounce from "../../../../hooks/use-debounce";
import SearchIcon from "../../svg/search";

type Props = {
  searchValue: string;
};

const SearchBar = ({ searchValue }: Props) => {
  const [search, setSearch] = useState<string>(searchValue);
  const { debouncedValue } = useDebounce(search);
  const initialRender = useRef(true);
  const router = useRouter();
  const pathname = usePathname();
  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const params = new URLSearchParams(window.location.search);
    params.delete("paged");
    if (debouncedValue) {
      params.delete("tag_id");
      params.delete("category_id");
      params.set("search", debouncedValue);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [debouncedValue, pathname, router]);

  return (
    <div
      className="search-bar"
    >
      <div
        className="custom-search-box"
      >
        <div className="d-flex flex-grow-1 align-items-center gap-3 overflow-visible">
          <div className="position-relative img-box">
            <Image
              fill
              src={"/img/logo.png"}
              alt="logo"
              priority
              sizes="(max-width:640px) 100px, 50px"
            />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search anything privately..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-100 bg-transparent border-0 text-white p-0"
            style={{
              fontSize: "0.9rem",
              boxShadow: "none",
            }}
            autoComplete="off"
          />
        </div>
        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#7C3980",
          }}
        >
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
