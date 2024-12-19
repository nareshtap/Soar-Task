export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture: string;
  password: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
}
