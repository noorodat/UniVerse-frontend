"use client"

import { useAuth } from "@/contexts/AuthContext";

export default function SaveJobButton() {

    const { userType } = useAuth();

    return (
        <>
            {userType === "student" && (
                <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                </button>
            )}
        </>
    )
}
