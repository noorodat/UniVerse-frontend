import { ImSpinner8 } from "react-icons/im"

export default function Loading() {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
            <ImSpinner8 className="animate-spin" />
        </main>
    )
}