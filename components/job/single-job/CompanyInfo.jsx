const CompanyInfo = ({ company }) => {
  company = company.company;
  return (
    <ul className="company-info">
      {company.industry && (
        <li>
          Industry: <span>{company.industry}</span>
        </li>
      )}
      {company.phone && (
        <li>
          Phone: <span>{company.phone}</span>
        </li>
      )}
      {company.email && (
        <li>
          Email: <span>{company.email}</span>
        </li>
      )}
      {company.city && company.country && (
        <li>
          Location: <span>{company?.city} {", "} {company?.country}</span>
        </li>
      )}
      {/* <li>
        Social media:
        <Social />
      </li> */}
    </ul>
  );
};

export default CompanyInfo;
