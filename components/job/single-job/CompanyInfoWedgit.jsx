"use client"

import Image from "next/image";
import CompanyInfo from "./CompanyInfo";
import WebsiteURL from "./WebsiteURL";

export default function CompanyInfoWedgit({ company }) {
    console.log(company)
    return (
        <div className="sidebar-widget company-widget">
            <div className="widget-content">
                <div className="company-title">
                    <div className="company-logo">
                        <Image
                            width={54}
                            height={53}
                            src={company.image}
                            alt="resource"
                            unoptimized
                        />
                    </div>
                    <h5 className="company-name">{company.name}</h5>
                    <a href="#" className="profile-link">
                        View company profile
                    </a>
                </div>

                <CompanyInfo company={{ company }} />

                <WebsiteURL websiteURL={company.website_url} />
                {/* End btn-box */}
            </div>
        </div>
    )
}
