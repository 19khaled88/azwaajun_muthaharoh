import { CustomJwtPayload } from "@/utils/interfaces";
import getSecondsUntilExpiration from "@/utils/jwt";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";




const refreshTokenApiCall = async (token: any) => {
  // const url = process.env.NEXT_PUBLIC_API_URL + '/auth/refresh-token'
  // const body =`${process.env.NEXTAUTH_SECRET},${token?.refreshToken}`
  // const res = await fetch(url,{
  //   method:"POST",
  //   body:body,
  //   headers:{
  //     'refresh-token': token.refreshToken
  //   }
  // });

  // if(res.ok){

  //   const data = await res.json();
  //   console.log('refresh_token_response',data)
  //   return{
  //     ...token,
  //     error:null,
  //     accessToken:data.access_token,
  //     refreshToken:data.refreshToken,
  //     expiresIn:(Date.now() + (parseInt(data.expires_in) * 1000) - 2000)
  //   }

  // }else{
  //   return{
  //     error:"RefreshTokenError"
  //   }
  // }
}

const authOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_API_URL + "/auth/login";
        const formData = new URLSearchParams();
        formData.append("email", credentials.email);
        formData.append("password", credentials.password);

        const res = await fetch(url, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        // If no error and we have user data, return it
        if (res.ok) {

          const response = await res.json()

          return response
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  callbacks: {

    async session({ session, token, user }) {
      session.accessToken = token?.accessToken
      session.role = token?.role
      session.email = token?.email
      session.refreshToken = token?.refreshToken



      // if(session?.accessToken ?? false){
      //   const url = process.env.NEXT_PUBLIC_API_URL + '/profile/user';
      //   const userRes = await fetch(url,{
      //     method:'POST',
      //     headers:{
      //       'Authorization':`${token?.accessToken}`
      //     }
      //   }) 

      //   if(userRes){
      //     const userDetails = await userRes.json()

      //     session.user = userDetails;
      //     session.user.name = `${userDetails.first_name} ${userDetails.last_name}`
      //   }
      // }

      return session
    },


    async jwt({ token, user }) {
      if (user) {

        const tokenVerified = (jwtDecode<CustomJwtPayload>(user.data.accessToken))
        //const expiresInInSeconds = tokenVerified?.exp / 1000;
        const expires_in = getSecondsUntilExpiration(tokenVerified?.exp);

        token.refreshToken = user.data.refreshToken;
        token.email = tokenVerified?.email;
        token.role = tokenVerified?.role;
        token.accessToken = user.data.accessToken;
        token.expiresIn = tokenVerified?.exp * 1000;
        token.expiresIns = expires_in;


        //  console.log('date now :', Date.now(),'exp :',tokenVerified?.exp * 1000 , 'expire :',token.expiresIn)
      }

      if (Date.now() < token.expiresIn) {

        return token
      }

      return await refreshTokenApiCall(token)

    }


  },

  secret: process.env.NEXTAUTH_SECRET as string,


  pages: {
    signIn: '/ui/auth/login',
    signOut: '/',
    // error: '/ui/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/ui/auth/verify-request', // (used for check email message)
    newUser: '/ui/auth/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};
// export default NextAuth(authOptions);
export default NextAuth(authOptions);


