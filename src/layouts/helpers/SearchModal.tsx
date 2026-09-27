import { properties } from "@/data/properties";
import { serviceDetails } from "@/data/service-details";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchResult, { type SearchEntry } from "./SearchResult";

const mainPages: SearchEntry[] = [
  {
    title: "Home",
    href: "/",
    keywords: "real estate home house buying selling",
  },
  {
    title: "About Us",
    href: "/company",
    keywords: "company homequest story team",
  },
  {
    title: "Properties",
    href: "/properties",
    keywords: "homes houses apartments villas listings",
  },
  {
    title: "Services",
    href: "/service",
    keywords: "property buying selling renting valuation management",
  },
  { title: "Contact Us", href: "/contact", keywords: "contact quote help" },
  {
    title: "Testimonials",
    href: "/reviews",
    keywords: "reviews stories homeowners",
  },
  { title: "Blog", href: "/blog", keywords: "articles news insights" },
  { title: "Agents", href: "/agent", keywords: "agent team experts" },
  {
    title: "How It Works",
    href: "/how-it-works",
    keywords: "process buying selling",
  },
  {
    title: "FAQs",
    href: "/faq",
    keywords: "questions answers help",
  },
];

const serviceSearchPriority = [
  "property-selling",
  "property-buying",
  "property-valuation",
  "property-services",
  "property-selling-services",
  "rental-management",
  "investment-consulting",
  "renting-services",
];

const searchableServices = [...serviceDetails].sort(
  (a, b) =>
    serviceSearchPriority.indexOf(a.slug) -
    serviceSearchPriority.indexOf(b.slug),
);

const searchEntries: SearchEntry[] = [
  ...mainPages,
  ...searchableServices.map(({ title, slug }) => ({
    title,
    href: `/service/${slug}`,
    keywords: `service property ${title}`,
  })),
  ...properties.map(({ title, slug, status, type }) => ({
    title,
    href: `/properties/${slug}`,
    keywords: `property ${status} ${type} ${title}`,
  })),
];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="8" fill="currentColor" />
    <path
      d="m7.25 7.25 5.5 5.5m0-5.5-5.5 5.5"
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchResult = useMemo(() => {
    const query = searchString.trim().toLowerCase();
    if (!query) return [];

    return searchEntries
      .filter(({ title, keywords = "" }) =>
        `${title} ${keywords}`.toLowerCase().includes(query),
      )
      .slice(0, 12);
  }, [searchString]);

  useEffect(() => {
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-search-trigger]"),
    );
    const openModal = (event: Event) => {
      event.preventDefault();
      setIsOpen(true);
    };

    triggers.forEach((trigger) => trigger.addEventListener("click", openModal));
    return () =>
      triggers.forEach((trigger) =>
        trigger.removeEventListener("click", openModal),
      );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (!searchResult.length) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((index) => (index + 1) % searchResult.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex(
          (index) => (index - 1 + searchResult.length) % searchResult.length,
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        window.location.assign(searchResult[selectedIndex]?.href ?? "/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, searchResult, selectedIndex]);

  useEffect(() => setSelectedIndex(0), [searchString]);

  return (
    <div
      id="searchModal"
      className={`search-modal${isOpen ? " show" : ""}`}
      role="presentation"
      aria-hidden={!isOpen}
    >
      <button
        id="searchModalOverlay"
        className="search-modal-overlay"
        type="button"
        aria-label="Close search"
        onClick={() => setIsOpen(false)}
      />
      <div className="search-wrapper" role="dialog" aria-modal="true">
        <div className="search-wrapper-header" role="search">
          <span className="search-wrapper-header-icon">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            id="searchInput"
            placeholder="Search..."
            className="search-wrapper-header-input"
            type="search"
            name="search"
            value={searchString}
            onChange={(event) => setSearchString(event.currentTarget.value)}
            autoComplete="off"
            aria-label="Search HomeQuest"
          />
          {searchString && (
            <button
              className="search-wrapper-clear"
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchString("")}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <SearchResult
          searchResult={searchResult}
          searchString={searchString}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </div>
    </div>
  );
};

export default SearchModal;
