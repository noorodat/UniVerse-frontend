import React from 'react'
import ApplyJobModalContent from './ApplyJobModalContent'
import { getCookie } from '@/utils/getCookie'
import { getData } from '@/utils/get-data/getData';
import { buildEndpoint } from '@/utils/buildEndpoint';
import cvEndPoints from '@/constants/endpoints/cv/cvEndPoints';

export default async function ApplyForJobModal({ jobId }) {

    const userId = await getCookie('user_id');
    // Get the cvs for the studnet
    const { data: CVs, error } = await getData(buildEndpoint(cvEndPoints.getStudentCVs, { id: userId }), true, 0);

    return (
        <div
            className="modal fade"
            id="applyJobModal"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="apply-modal-content modal-content">
                    <div className="text-center">
                        <h3 className="title">Apply for this job</h3>
                        <button
                            type="button"
                            className="closed-modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    {/* End modal-header */}

                    <ApplyJobModalContent CVs={CVs} error={error} jobId={jobId} />
                    {/* End PrivateMessageBox */}
                </div>
                {/* End .send-private-message-wrapper */}
            </div>
        </div>
    )
}
