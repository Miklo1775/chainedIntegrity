import JobSearch from "./JobSearch";

import classes from "./JobComponent.module.css";

const JobComponent = () => {
  return (
    <div className={classes.jobsContainer}>
      <JobSearch />
    </div>
  );
};

export default JobComponent;
