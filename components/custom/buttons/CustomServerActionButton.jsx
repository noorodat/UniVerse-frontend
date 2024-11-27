"use client";

import { useTransition } from "react";
import { toast } from "react-toastify";

const CustomServerActionButton = ({
    label,
    transitionFunction,
    pendingMessage,
    ...rest
}) => {
    const [isPending, startTransition] = useTransition();
    let feedbackMessage = null;

    const handleTransition = async () => {
        try {
            feedbackMessage = await transitionFunction();
            if (feedbackMessage) {
                toast.success(feedbackMessage)
            }
        } catch (error) {
            feedbackMessage = error;
            if (feedbackMessage) {
                toast.error(feedbackMessage.message)
            }
        }
    };

    return (
        <div className="btn-box">
            <button
                onClick={() => startTransition(handleTransition)}
                disabled={isPending}
                type="button"
                {...rest}
            >
                {isPending ? <span>{pendingMessage}</span> : <span>{label}</span>}
            </button>
        </div>
    );
};

export default CustomServerActionButton;