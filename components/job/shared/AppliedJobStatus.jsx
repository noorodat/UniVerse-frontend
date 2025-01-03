import React from 'react';

export default function AppliedJobStatus({ status }) {
    const STATUS_CLASSES = {
        pending: 'text-warning',
        rejected: 'text-danger',
        approved: 'text-success',
    };

    const statusClass = STATUS_CLASSES[status?.toLowerCase()] || 'text-muted';

    return (
        <span className={`${statusClass} fw-bold`}>
            {status || 'Unknown'}
        </span>
    );
}
