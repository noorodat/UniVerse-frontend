import Image from "next/image";

const ApplicantsList = () => {
  const applicantsContent = [
    {
      id: 1,
      avatar: "/images/resource/default-user.svg",
      name: "Brooklyn Simmons",
      designation: "Web Developer",
    },
    {
      id: 2,
      avatar: "/images/resource/default-user.svg",
      name: "Courtney Henry",
      designation: "Web Developer",
    },
    {
      id: 3,
      avatar: "/images/resource/default-user.svg",
      name: "Marvin McKinney",
      designation: "Web Developer",
    },
  ];
  return (
    <>
      {applicantsContent.map((applicants) => (
        <li className="applicant" key={applicants.id}>
          <figure className="image">
            <Image
              width={50}
              height={51}
              src={applicants.avatar}
              alt="resource"
            />
          </figure>
          <h4 className="name">{applicants.name}</h4>
          <span className="designation">{applicants.designation}</span>
        </li>
      ))}
    </>
  );
};

export default ApplicantsList;
