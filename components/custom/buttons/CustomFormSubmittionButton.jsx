import { Spinner } from "react-bootstrap";

export default function CustomFormSubmittionButton({ label, isLoading, ...rest }) {
    return (
        <button
            type="submit"
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? (
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            ) : (
                label
            )}
        </button>
    );
}