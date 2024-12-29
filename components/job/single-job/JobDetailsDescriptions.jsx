const JobDetailsDescriptions = ({ jobData }) => {

  console.log(jobData.requirements)

  return (
    <div className="job-detail">
      <h4>Job Description</h4>
      <p>
        {jobData.description}
      </p>
      <h4>Job Requirements</h4>
      <ul className="list-style-three">
        {jobData.requirements.map((requirement, i) => (
          <li key={i}>
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetailsDescriptions;
