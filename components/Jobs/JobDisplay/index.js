import classes from "./JobDisplay.module.css";
import { useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { v4 as uuidv4 } from "uuid";

const JobDisplay = ({ filteredResults }) => {
  return (
    <div className={classes.displayContainer}>
      <h1>Your Results: </h1>
      {filteredResults.map((job) => {
        return <SingleJobCard key={uuidv4()} job={job} />;
      })}
    </div>
  );
};

export default JobDisplay;
