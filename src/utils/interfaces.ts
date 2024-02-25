export type CustomJwtPayload = {
    id: string;
    iat: number;
    email:string;
    exp: number;
    role: string; // Add the 'role' property
    // Add other properties as needed
  }