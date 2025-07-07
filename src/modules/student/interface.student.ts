
export type Gurdian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName:string;
    motherOccupation:string;
    motherContactNumber:string;
  };

  export type LocalGurdian={
    name:string;
    occupation:string;
    contactNumber:string;
    address:string;
  }
  export type UserName = {
    firstName: string;
    middleName?: string; // Optional if not always provided
    lastName: string;
  }
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Gurdian;
  localGurdian:LocalGurdian;
  profileImage:string;
  isActive:'active'|'blocked'
};
