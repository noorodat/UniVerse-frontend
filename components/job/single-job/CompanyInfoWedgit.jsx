import Image from "next/image";
import CompanyInfo from "./CompanyInfo";
import WebsiteURL from "@/app/(UniVerse)/components/shared/WebsiteURL";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import Link from "next/link";

export default function CompanyInfoWedgit({ company }) {
    return (
        <div className="sidebar-widget company-widget">
            <div className="widget-content">
                <div className="company-title">
                    <div className="company-logo">
                        <Image
                            width={54}
                            height={53}
                            src={company.image || DEFAULT_USER_IMAGE}
                            alt="resource"
                            unoptimized
                        />
                    </div>
                    <h5 className="company-name">{company.name}</h5>
                    <Link href={`/single-company/${company.id}`} className="profile-link">
                        View company profile
                    </Link>
                </div>

                <CompanyInfo company={{ company }} />

                {company.website_url && (
                    <WebsiteURL websiteURL={company.website_url} />
                )}
                {/* End btn-box */}
            </div>
        </div>
    )
}
