import React from 'react'

export default function WebsiteURL({ websiteURL }) {
    return (
        <div className="btn-box">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn btn-style-three"
            >
                {websiteURL}
            </a>
        </div>
    )
}
