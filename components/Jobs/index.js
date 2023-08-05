import JobSearch from "./JobSearch";
import JobDisplay from "./JobDisplay";
import { useState } from "react";

import classes from "./JobComponent.module.css";

const DUMMY_JOBS = [
  {
    id: 1,
    name: "Greatest Bakery",
    role: "Entry-level Baker",
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

const JobComponent = () => {
  const [results, setResults] = useState(DUMMY_JOBS);
  const [searchValue, setSearchValue] = useState("");
  // const [filteredResults, setFilteredResults] = useState(results);
  const filteredResults = results.filter((job) => {
    return job.role.toLowerCase().match(searchValue.toLowerCase());
  });

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    // if (searchValue.length > 0) {
    //   setFilteredResults((state) => {
    //     return results.filter((job) => {
    //       return job.role.toLowerCase().match(searchValue.toLowerCase());
    //     });
    //   });
    // } else if (searchValue.length === 0) {
    //   setFilteredResults(results);
    // }
  };

  return (
    <div className={classes.jobsContainer}>
      <JobSearch
        searchValue={searchValue}
        handleSearchInput={handleSearchInput}
        setSearchValue={setSearchValue}
        setResults={setResults}
      />
      <JobDisplay filteredResults={filteredResults} />
    </div>
  );
};

export default JobComponent;
