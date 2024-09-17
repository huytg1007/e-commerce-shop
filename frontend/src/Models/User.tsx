export type UserProfileToken = {
    userName: string;
    email: string;
    resultObj: string;
  };
  
  export type UserProfile = {
    userName: string;
    email: string;
    photoUrl: string;
    role: string;
    firstName: string;
    lastName: string;
  };

export type jwtPayload = {
    UserName: string;
    Email: string;
    PhotoUrl: string;
    Role: string;
    FirstName: string;
    LastName: string;
    exp: string;
    iss: string;
    aud: string;
}