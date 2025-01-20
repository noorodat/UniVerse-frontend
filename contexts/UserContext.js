"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "@/utils/get-data/getData";
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

const UserContext = createContext();
const DEFAULT_USER_IMAGE = "/images/resource/default-user.svg";

export const UserProvider = ({ children }) => {
    const router = useRouter();
    const { userType } = useAuth();
    const [userProfile, setUserProfile] = useState(null);
    const [name, setName] = useState("");
    const [id, setId] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUserProfile = async () => {
        try {
            const response = await getData(profileEndPoints.getProfile, true, 0);
            if (!response.data.is_verified) {
                router.push(`verify_email?email=${response.data.email}&user_type=${userType}`);
            }
            console.log(response)
            setUserProfile(response.data);
            if (userType == 'student') {
                setName(response.data.first_name + " " + response.data.last_name);
            } else {
                setName(response.data.name);
            }
            setImage(response.data.image || DEFAULT_USER_IMAGE);
            setId(response.data.id);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    if (loading) return <CustomSpinnerLoading />
    if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

    return (
        <UserContext.Provider value={{ userProfile, getUserProfile, name, image, userType, id }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within an UserProvider");
    }
    return context;
};