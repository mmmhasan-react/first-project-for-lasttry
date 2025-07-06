import { model, Schema } from "mongoose"
import { Gurdian, LocalGurdian, Student, UserName } from "./interface.student"

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  }
})



const gurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required']
  },
  fatherContactNumber: {
    type: String,
    required: [true, 'Father contact number is required']
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required']
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required']
  },
  motherContactNumber: {
    type: String,
    required: [true, 'Mother contact number is required']
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required']
  }
})


const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required']
  },
  contactNumber: {
    type: String,
    required: [true, 'Local guardian contact number is required']
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required']
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required']
  }
})



const StudentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required']
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required']
  },
  gender:{
    type:String,
    enum:['male','female'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required']
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency contact number is required']
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
      message: '{VALUE}Invalid blood group'
    },
    required: [true, 'Blood group is required']
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required']
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required']
  },
  guardian: {
    type: gurdianSchema,
    required: [true, 'Guardian information is required']
  },
  localGurdian: {
    type: localGurdianSchema,
    required: [true, 'Local guardian information is required']
  },
  profileImage: {
    type: String,
    required: [true, 'Profile image is required']
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active'
  }
}, { timestamps: true })



export const studentModel = model<Student>('Student', StudentSchema)