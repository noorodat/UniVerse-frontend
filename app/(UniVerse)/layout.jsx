import { AuthProvider } from "@/contexts/AuthContext";

export default async function UniVerseLayout({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}