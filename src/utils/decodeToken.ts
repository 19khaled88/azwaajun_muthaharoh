import { jwtDecode } from "jwt-decode"


const decodedToken = async (token:any) => {
    if(token){
        const res = jwtDecode(token.accessToken)
        return res
    }
}

export default decodedToken
