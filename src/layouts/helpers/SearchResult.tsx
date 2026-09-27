import React from "react";

export interface SearchEntry {
  title: string;
  href: string;
  keywords?: string;
}

interface SearchResultProps {
  searchResult: SearchEntry[];
  searchString: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const SearchResult = ({
  searchResult,
  searchString,
  selectedIndex,
  onSelect,
}: SearchResultProps) => {
  if (!searchString) return null;

  return (
    <div className="search-wrapper-body" role="listbox">
      {searchResult.length ? (
        searchResult.map((item, index) => (
          <a
            key={item.href}
            id={`search-result-${index}`}
            className={`search-result-item${
              selectedIndex === index ? " search-result-item-active" : ""
            }`}
            href={item.href}
            role="option"
            aria-selected={selectedIndex === index}
            onMouseEnter={() => onSelect(index)}
          >
            <span className="search-result-item-title">{item.title}</span>
            <span className="search-result-item-path">{item.href}</span>
          </a>
        ))
      ) : (
        <p className="search-result-empty">
          No results for <strong>“{searchString}”</strong>
        </p>
      )}
    </div>
  );
};

export default SearchResult;
