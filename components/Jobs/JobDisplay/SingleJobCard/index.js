const SingleJobCard = ({ job }) => {
  return (
    <div>
      <img src={job.img} />
      <h1>{job.name}</h1>
      <h3>{job.role}</h3>
      <p>
        {job.locationCity},{job.locationState}
      </p>
    </div>
  );
};

export default SingleJobCard;
