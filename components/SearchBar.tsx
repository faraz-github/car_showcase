"use client";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

type Props = {};

const SearchBar = (props: Props) => {
  const [manufacturer, setManufacturer] = useState<string>("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchnbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
};

export default SearchBar;