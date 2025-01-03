import { ApplicantCard } from "./ApplicantCard";
import CustomServerActionButton from "@/components/custom/buttons/CustomServerActionButton";
import CustomSpinnerLoadingButton from "@/components/custom/loading/CustomSpinnerLoadingButton";

export const ApplicationsList = ({ applicants, handlers, type }) => {
    const { handleApproveApplication, handleRejectApplication, handleDeleteApplication } = handlers;

    const getActionButtons = (applicant) => {
        const buttons = [];

        if (type !== 'Approved') {
            buttons.push(
                <li key="approve">
                    <CustomServerActionButton
                        label={<span className="la la-check"></span>}
                        transitionFunction={() => handleApproveApplication(applicant.id)}
                        pendingMessage={<CustomSpinnerLoadingButton />}
                        data-text="Approve Application"
                    />
                </li>
            );
        }

        if (type !== 'Rejected') {
            buttons.push(
                <li key="reject">
                    <CustomServerActionButton
                        label={<span className="la la-times-circle"></span>}
                        transitionFunction={() => handleRejectApplication(applicant.id)}
                        pendingMessage={<CustomSpinnerLoadingButton />}
                        data-text="Reject Application"
                    />
                </li>
            );
        }

        buttons.push(
            <li key="delete">
                <CustomServerActionButton
                    label={<span className="la la-trash"></span>}
                    transitionFunction={() => handleDeleteApplication(applicant.id)}
                    pendingMessage={<CustomSpinnerLoadingButton />}
                    data-text="Delete Application"
                />
            </li>
        );

        return buttons;
    };

    return (
        <div className="row">
            {applicants.map((applicant) => (
                <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    actions={getActionButtons(applicant)}
                />
            ))}
        </div>
    );
};