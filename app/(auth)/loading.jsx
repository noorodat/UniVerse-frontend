import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
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