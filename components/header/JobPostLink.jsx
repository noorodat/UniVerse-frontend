import Link from "next/link";

export default function JobPostLink({ userType }) {
    return userType === 'company' ? (
        <Link href="/employers-dashboard/post-jobs" className="theme-btn btn-style-one">
            Job Post
        </Link>
    ) : null;
}