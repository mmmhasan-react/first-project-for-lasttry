import { model, Schema } from 'mongoose'
import { Gurdian, LocalGurdian, Student, UserName } from './interface.student'
 const userNameSchema = new Schema<UserName>({
            firstName:{
                type:String,
                required:true
            },   
            middleName:{
                type:String,
                required:true
            },

            lastName:{
                type:String,
                required:true
            }
        })
const gurdianSchema = new Schema<Gurdian>({
        fatherName:{
            type:String,
            required:true
        },
        
        fatherContactNumber:{
            type:String,
            required:true
        },
        
        fatherOccupation:{
            type:String,
            required:true
        },
            motherName:{
            type:String,
            required:true
        },
        
        motherContactNumber:{
            type:String,
            required:true
        },
        
        motherOccupation:{
            type:String,
            required:true
        },
    })
const localGurdianSchema=new Schema<LocalGurdian>({
        name:{
            type:String,
            required:true
        },
        contactNumber:{
            type:String,
            required:true
        },
        occupation:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }
    })
const StudentSchema = new Schema<Student>({
    id:{
        type:String,
        required:true
    },
        name:userNameSchema,
    gender:{
        type:String,
        enum:['male','female']
    },
    dateOfBirth:{
        type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    emergencyContactNumber:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
        required:true
    },
    presentAddress:
    {
        type:String,
        required:true
    },
    permanentAddress:{
        type:String,
        required:true
    },
    guardian:gurdianSchema,
    localGurdian:localGurdianSchema,
    profileImage:{
        type:String,
        required:true
    },
    isAcitve:{
        type:String,
        enum:['active','blocked']
    }
})



export const StudentModel = model<Student>('Student', StudentSchema)