import React from 'react'
import ApplyJobModalContent from './ApplyJobModalContent'

export default function ApplyForJobModal() {
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

                    <ApplyJobModalContent />
                    {/* End PrivateMessageBox */}
                </div>
                {/* End .send-private-message-wrapper */}
            </div>
        </div>
    )
}
