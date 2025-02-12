"use client";

import { createContext, useContext, useState, useEffect, use } from "react";
import { getData } from "@/utils/get-data/getData";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userType, setUserType] = useState("");

    const getUser = async () => {
        try {
            const response = await getData(authEndpoints.getUser);
            console.log(response)
            setUser(response.data);
            setUserType(response.data.user_type);
            setUserId(response.data.id);
            setEmail(response.data.email);
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
        <AuthContext.Provider value={{ user, getUser, userType, userId, email }}>
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