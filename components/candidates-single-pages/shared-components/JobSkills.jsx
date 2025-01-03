const JobSkills = ({ skills }) => {
  return (
    <ul className="job-skills">
      {skills?.map((skill, i) => (
        <li key={i}>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
