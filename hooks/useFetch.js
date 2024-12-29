"use client"
import { useState, useEffect } from 'react';
import { getUserToken } from '@/utils/getUserToken';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const baseUrl = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;
                const token = await getUserToken();
                const response = await fetch(`${baseUrl}/${endpoint}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': "application/json"
                    },
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.detail}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;