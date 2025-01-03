import React from 'react'

export default function OtherJobInfo({ job }) {
    return (
        <>
            {job?.type && job.department && (
                <ul ul class="job-other-info">
                    <li class="time">{job.type}</li>
                    <li class="privacy">{job.department.name}</li>
                </ul>
            )}
        </>
    )
}
