
import { Model} from 'mongoose';

export type TGurdian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName:string;
    motherOccupation:string;
    motherContactNumber:string;
  };

  export type TLocalGurdian={
    name:string;
    occupation:string;
    contactNumber:string;
    address:string;
  }
  export type TUserName = {
    firstName: string;
    middleName?: string; // Optional if not always provided
    lastName: string;
  }
export type TStudent = {
  id: string;
  password:string;
  name: TUserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGurdian;
  localGurdian:TLocalGurdian;
  profileImage:string;
  isActive:'active'|'blocked';
  isDeleated:boolean;
};

//{ for creating instance method
//  export type TStudentMethods = {
//   isUserExist(id:string):Promise<TStudent|null>
//  }



//  export type StuentMethodsModel= Model<TStudent,Record<string, never>,TStudentMethods>}


//{creating custom static methods}

export interface studentStaticModel extends Model<TStudent>{
isUserExist(id:string):Promise<TStudent|null>
}