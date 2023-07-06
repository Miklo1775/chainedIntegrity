import JobSearch from "./JobSearch";
import JobDisplay from "./JobDisplay";

import classes from "./JobComponent.module.css";

const JobComponent = () => {
  return (
    <div className={classes.jobsContainer}>
      <JobSearch />
      <JobDisplay />
    </div>
  );
};

export default JobComponent;
