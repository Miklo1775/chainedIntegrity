import classes from "./JobSearch.module.css";

import { useState } from "react";

const JobSearch = ({ setResults, handleSearchInput, setSearchValue, searchValue }) => {
  const filterResults = () => {};

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchInputContainer}>
        <label htmlFor="search">Search:</label>
        <input type="search" id="search" onChange={handleSearchInput} value={searchValue} />
      </div>
    </div>
  );
};

export default JobSearch;
