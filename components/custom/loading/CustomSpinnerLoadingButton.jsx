import { Spinner } from "react-bootstrap";

export default function CustomSpinnerLoadingButton() {
    return (
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        />
    )
}