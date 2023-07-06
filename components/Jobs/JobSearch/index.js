import classes from "./JobSearch.module.css";

const JobSearch = () => {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchInputContainer}>
        <label htmlFor="search">Search:</label>
        <input type="search" id="search" />
      </div>
    </div>
  );
};

export default JobSearch;
