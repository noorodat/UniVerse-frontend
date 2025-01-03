import { Spinner } from "react-bootstrap";

export default function CustomSpinnerLoading({ fullPage = true }) {
    return (
        <main className={`d-flex justify-content-center align-items-center ${fullPage ? "vh-100" : ""}`}>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        </main>
    )
}