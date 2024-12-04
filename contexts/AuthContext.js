"use client";

import { createContext, useContext, useState, useEffect, use } from "react";
import { getData } from "@/utils/getData";
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userType, setUserType] = useState("");

    const getUser = async () => {
        try {
            const response = await getData(profileEndPoints.getUser);
            console.log(response)
            setUser(response.data);
            setUserType(response.data.user_type);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) return <CustomSpinnerLoading />
    if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

    return (
        <AuthContext.Provider value={{ user, getUser, userType }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};