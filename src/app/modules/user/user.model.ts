import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config/config";



export const UserSchema = new Schema<Tuser>({


    id:{
        type:String,
        reuired:true
    },
    password:{
        type:String,
        required:true
    },
    needspasswordChange: {
    type: Boolean,
    required: true,
    default: true, // optional, based on your logic
    },
    role:{
        type:String,
        enum:['student','faculty','admin']
    },
    status:{
        type:String,
        enum:['in-progress','b'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


// pre hook
UserSchema.pre('save', async function(next){
 this.password= await bcrypt.hash(this.password, Number(config.bcript_rounds))
 next()
})


UserSchema.post('save', function(doc, next){
doc.password = ''
next()
})



export const UserModel = model<Tuser>('Users', UserSchema)