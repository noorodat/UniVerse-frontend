import React from 'react'

export default function DownloadCVButton({ url }) {
    return (
        <>
            <a
                className="theme-btn btn-style-one"
                href={url}
                download
            >
                Download CV
            </a>
        </>
    )
}
