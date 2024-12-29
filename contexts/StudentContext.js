"use client";

import { createContext, useContext, useLayoutEffect } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

    const router = useRouter();

    const { userType } = useAuth();

    useLayoutEffect(() => {
        if (userType !== 'student') {
            router.push('/');
        }
    }, []);

    return (
        <StudentContext.Provider>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useStudent must be used within an AuthProvider");
    }
    return context;
};