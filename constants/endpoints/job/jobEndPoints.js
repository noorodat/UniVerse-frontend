export default {
    jobPosts: '/api/job_posts/',
    jobsByCompany: `/api/companies/{company_id}/job-posts/`,
    singleJob: `/api/job_posts/{id}/`,
    featuredJobs: 'api/featured_jobs/',
    applicaitons: '/api/applications/',
    studentAppliedJobs: '/api/students/{id}/applied_jobs/',
    showJobApplicants: `/api/job_posts/{id}/applicants/`,
    approveApplication: `/api/applications/{id}/approve/`,
    rejectApplication: `/api/applications/{id}/reject/`,
    deleteApplicaiton: `/api/applications/{id}/delete/`,
    showAllApplicantsByCompany: `/api/companies/{id}/applications/`,
    jobSearch: `/api/job_posts/search/`
};
