const JobDetailsDescriptions = ({about}) => {
  return (
    <div className="job-detail">
      <h4>About Company</h4>
      <p>
        {about}
      </p>
    </div>
  );
};

export default JobDetailsDescriptions;
