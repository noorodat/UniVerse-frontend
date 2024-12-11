// externalAPIs/APILayerSkills.js
export async function getSkills(query, count = 15) {
    const APIKey = process.env.NEXT_PUBLIC_API_LAYER_SKILLS_API_KEY;

    if (!APIKey) {
        throw new Error("API key is missing. Please add it to your environment variables.");
    }

    const endpoint = `https://api.apilayer.com/skills?q=${query}&count=${count}`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': APIKey
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching skills: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch skills:", error);
        throw error;
    }
}
