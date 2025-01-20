export default {
    'companySignup': 'api/companies/signup/',
    'verifyCompany': 'api/companies/verify_otp/',
    'requestNewCompanyOTP': 'api/companies/request_new_otp/',
    'featuredCompanies': 'api/companies/featured_companies/',
    getCompanyInfo: 'api/companies/{id}/',
    getCompanies: 'api/companies/',
    // Pending companies
    getSignupPendingRequests: 'api/pending_signup_requests/',
    acceptCompany: `api/pending_signup_requests/{id}/accept/`,
    rejectCompany: `api/pending_signup_requests/{id}/reject/`,
}