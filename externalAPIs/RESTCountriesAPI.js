export async function getCountries() {
    const url = `https://restcountries.com/v3.1/all`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching countries: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        const countryNames = data.map(country => ({ name: country.name.common }));

        return countryNames;
    } catch (error) {
        console.error("Failed to fetch countries:", error);
        throw error;
    }
}
