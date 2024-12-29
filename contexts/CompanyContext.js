"use client";

import { createContext, useContext, useLayoutEffect } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {

    const router = useRouter();

    const { userType } = useAuth();

    useLayoutEffect(() => {
        if (userType !== 'company') {
            router.push('/');
        }
    }, []);

    return (
        <CompanyContext.Provider>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useStudent must be used within an AuthProvider");
    }
    return context;
};