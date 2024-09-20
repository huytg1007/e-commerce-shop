export type UserProfileToken = {
    userName: string;
    email: string;
    resultObj: string;
  };
  
  export type UserProfile = {
    id: string;
    userName: string;
    email: string;
    photoUrl: string;
    role: string;
    firstName: string;
    lastName: string;
    dob: Date;
    phoneNumber: string;
  };

export type jwtPayload = {
    UserName: string;
    Email: string;
    PhotoUrl: string;
    Role: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    DoB: Date;
    exp: string;
    iss: string;
    aud: string;
}

export type updateUserInfoRequest = {
  id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  dob: Date;
  phoneNumber: string;
}