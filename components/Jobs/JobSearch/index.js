import classes from "./JobSearch.module.css";

import { useState } from "react";

const DUMMY_JOBS = [
  {
    id: 1,
    name: "Greatest Bakery",
    role: "Entry-level Beker",
    locationCity: "Chicago",
    locationState: "Illinois",
    unpaidIntern: false,
    img: "https://placehold.co/600x400/000000/FFF",
  },
  {
    id: 2,
    name: "The Hungry Hippo",
    role: "Beginner Cook",
    locationCity: "New York City",
    locationState: "New York",
    unpaidIntern: false,
    img: "https://placehold.co/600x400/000000/FFF",
  },
  {
    id: 3,
    name: "Kit Kat Galour",
    role: "Candy Researcher",
    locationCity: "Chicago",
    locationState: "Illinois",
    unpaidIntern: false,
    img: "https://placehold.co/600x400/000000/FFF",
  },
];

const JobSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  console.log(searchValue);

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
