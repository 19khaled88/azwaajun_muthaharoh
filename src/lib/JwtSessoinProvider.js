'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import decodedToken from '../utils/decodeToken'
const SessionContext = React.createContext(null)

export default function JWTSessionProvider(){
    const [decodedSession, setDecodedSession] = React.useState({})
    const { data: session, status } = useSession();

    useEffect(()=>{
       const fetchData = async () => {
            //check if the session exists
            if (!session) {
                setDecodedSession({});
                return; // Exit early if session does not exist
            }

            // Verify token
            try {
                const res = await decodedToken(session);
                setDecodedSession(res)
                // Do something with res if needed
            } catch (error) {
                // Handle error
                console.error('Token verification failed')
            }
        };

        // Call the inner async function
        fetchData();
    },[session])

    return(
        <SessionContext.Provider value={decodedSession}>
            {children}
        </SessionContext.Provider>
    )
}

// export const useSession=()=>React.useContext(SessionContext)