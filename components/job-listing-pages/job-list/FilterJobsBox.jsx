'use client'

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "../../../features/filter/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../../../features/job/jobSlice";
import UserImage from "@/components/common/UserImage";
import OtherJobInfo from "@/components/job/shared/OtherJobInfo";

const FilterJobsBox = ({ jobs }) => {
  const { jobList, jobSort } = useSelector((state) => state.filter);
  const {
    keyword,
    location,
    destination,
    category,
    jobType,
    datePosted,
    experience,
    salary,
    tag,
  } = jobList || {};

  const { sort, perPage } = jobSort;

  const dispatch = useDispatch();

  // keyword filter on title
  const keywordFilter = (item) =>
    keyword !== ""
      ? item.title.toLowerCase().includes(keyword.toLowerCase())
      : true;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item.company.city.toLowerCase().includes(location.toLowerCase())
      : true;

  // category filter (department)
  const categoryFilter = (item) =>
    category !== ""
      ? item.department.name.toLowerCase() === category.toLowerCase()
      : true;

  // job-type filter
  const jobTypeFilter = (item) =>
    jobType?.length !== 0
      ? jobType.includes(item.type.toLowerCase().split(" ").join("-"))
      : true;

  // date-posted filter
  const datePostedFilter = (item) => {
    if (datePosted === "" || datePosted === "all") return true;
    
    const postedDate = new Date(item.created_at);
    const currentDate = new Date();
    const hoursDiff = Math.abs(currentDate - postedDate) / 36e5; // Convert to hours

    switch (datePosted) {
      case "last-hour":
        return hoursDiff <= 1;
      case "last-24-hour":
        return hoursDiff <= 24;
      case "last-7-days":
        return hoursDiff <= 168;
      case "last-14-days":
        return hoursDiff <= 336;
      case "last-30-days":
        return hoursDiff <= 720;
      default:
        return true;
    }
  };

  // salary filter
  const salaryFilter = (item) => {
    if (!item.salary_range) return true;
    const itemSalary = parseInt(item.salary_range);
    return itemSalary >= salary.min && itemSalary <= salary.max;
  };

  // tag filter
  const tagFilter = (item) =>
    tag !== "" ? item.tags.includes(tag) : true;

  // Apply all filters
  const filteredJobs = jobs
    .filter(keywordFilter)
    .filter(locationFilter)
    .filter(categoryFilter)
    .filter(jobTypeFilter)
    .filter(datePostedFilter)
    .filter(salaryFilter)
    .filter(tagFilter);

  // Sort jobs
  if (sort === "asc") {
    filteredJobs.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  } else if (sort === "des") {
    filteredJobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  // Apply pagination
  let displayedJobs = filteredJobs;
  if (perPage.end > 0) {
    displayedJobs = filteredJobs.slice(perPage.start, perPage.end);
  }

  let content = displayedJobs.map((job) => (
    <div className="job-block" key={job.id}>
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <UserImage url={job.company.image} />
          </span>
          <h4>
            <Link href={`/job-single/${job.id}`}>{job.title}</Link>
          </h4>

          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span>
              {job.company.name}
            </li>
            <li>
              <span className="icon flaticon-map-locator"></span>
              {job.company.city}
            </li>
            {job.salary_range && (
              <li>
                <span className="icon flaticon-money"></span> ${job.salary_range}
              </li>
            )}
          </ul>

          <OtherJobInfo job={job} />

          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    </div>
  ));

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // clear all filters
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(clearJobType());
    dispatch(clearJobTypeToggle());
    dispatch(addDatePosted(""));
    dispatch(clearDatePostToggle());
    dispatch(clearExperience());
    dispatch(clearExperienceToggle());
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addTag(""));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="ls-switcher">
        <div className="show-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters "
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>

          <div className="text">
            Show <strong>{content?.length}</strong> jobs
          </div>
        </div>

        <div className="sort-by">
          {keyword !== "" ||
            location !== "" ||
            destination?.min !== 0 ||
            destination?.max !== 100 ||
            category !== "" ||
            jobType?.length !== 0 ||
            datePosted !== "" ||
            experience?.length !== 0 ||
            salary?.min !== 0 ||
            salary?.max !== 20000 ||
            tag !== "" ||
            sort !== "" ||
            perPage.start !== 0 ||
            perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              Clear All
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Oldest</option>
            <option value="des">Newest</option>
          </select>

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 "
            value={JSON.stringify(perPage)}
          >
            <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
            <option value={JSON.stringify({ start: 0, end: 10 })}>
              10 per page
            </option>
            <option value={JSON.stringify({ start: 0, end: 20 })}>
              20 per page
            </option>
            <option value={JSON.stringify({ start: 0, end: 30 })}>
              30 per page
            </option>
          </select>
        </div>
      </div>

      {content}

      <div className="ls-show-more">
        <p>Show {content.length} of {filteredJobs.length} Jobs</p>
        <div className="bar">
          <span 
            className="bar-inner" 
            style={{ width: `${(content.length / filteredJobs.length) * 100}%` }}
          ></span>
        </div>
        {content.length < filteredJobs.length && (
          <button 
            className="show-more"
            onClick={() => dispatch(addPerPage({ 
              start: 0, 
              end: perPage.end + 10 
            }))}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default FilterJobsBox;