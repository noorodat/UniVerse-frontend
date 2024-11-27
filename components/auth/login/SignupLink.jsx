import Link from "next/link"

export default function SignupLink() {
    return (
        <div className="bottom-box">
            <div className="text">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                >
                    Signup
                </Link>
            </div>
        </div>
    )
}