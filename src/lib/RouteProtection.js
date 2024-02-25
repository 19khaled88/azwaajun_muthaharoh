import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import decodedToken from "../utils/decodeToken";


const ProtectedRoute =async ({ children }) => {
    const router = useRouter()
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            if (!session) {

                router.push('/ui/auth/login')
            } else if (session) {
                const userRole = await decodedToken(session);
                console.log(userRole)
            }
        };

        // Call the inner async function
        fetchData();
    }, [session])
    
    return <>{children}</>
}

export default ProtectedRoute