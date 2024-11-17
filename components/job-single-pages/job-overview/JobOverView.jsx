const JobOverView = () => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>Posted 1 hours ago</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>April 06, 2021</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Location:</h5>
          <span>Amman, Jordan</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>Web developer</span>
        </li>
        {/* <li>
          <i className="icon icon-salary"></i>
          <h5>Salary:</h5>
          <span>$35k - $45k</span>
        </li> */}
      </ul>
    </div>
  );
};

export default JobOverView;
