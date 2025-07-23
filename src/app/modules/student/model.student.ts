import { model, Schema } from "mongoose"
import { TLocalGurdian, TStudent,  TUserName, TGurdian, studentStaticModel } from "./interface.student"
import validator from "validator"
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim:true,
    required: [true, 'First name is required'],
    validate:{
        validator:function(value:string){
        const firstName = value.charAt(0).toUpperCase()+value.slice(1)
        return firstName === value
    },
        message:"{VALUE} must be capitalise"
    },
    message:"First name must be capitalise"
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



const gurdianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    maxlength:[20, "father name not more than 20 character"]
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


const localGurdianSchema = new Schema<TLocalGurdian>({
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



export const StudentSchema = new Schema<TStudent,studentStaticModel>({
  id: {
    type: String,
    required: [true, 'Student ID is required']
  },
  user:{
    type:Schema.Types.ObjectId,
    required:[true,'user reference id required'],
    unique:true,
    ref:'UserModel'
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
    required: [true, 'Email is required'],
    validate:{
      validator:(value)=>validator.isEmail(value),
      message:"{VALUE} is not"
    }
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
  isDeleated:{
    type:Boolean,
    default:false
  },
},{ toJSON: { virtuals: true }, timestamps: true})

StudentSchema.pre('find', function(next){
  this.find({isDeleated:{$ne:true}})
  next()
})
StudentSchema.pre('findOne', function(next){
  this.findOne({isDeleated:{$ne:true}})
  next()
})

StudentSchema.pre('aggregate',function(next){
this.pipeline().unshift({$match:{isDeleated:{$ne:true}}})
next()
})

StudentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});
//{creating custom instance methods}
// StudentSchema.methods.isUserExist=async function(id:string){
//   const exisUser= await studentModel.findOne({id})
//   return exisUser
// }

//{creating custom static methods}


StudentSchema.statics.isUserExist = async function (id:string){
  const exisUser = await studentModel.findOne({id})
  return exisUser
}
export const studentModel = model<TStudent, studentStaticModel>('Student', StudentSchema)
