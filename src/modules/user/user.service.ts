import config from "../../config/config";
import { TStudent } from "../student/interface.student";
import { studentModel } from "../student/model.student";
import { Tuser } from "./user.interface";
import { UserModel } from "./user.model";



const createStudentIntoDb = async(password:string, studentData:TStudent)=>{
//     if(await studentModel.isUserExist(studentData.id)){
//     throw new Error("from custom static, user already exist")
const userData:Partial<Tuser>={}
//if password not given?

   userData.password=password||config.default_pass as string


   userData.role = 'student'
   userData.id = '203010001'
// }
const newUser = await UserModel.create(userData)// built in static method
//{code for implementing custom instance method 
// // const student = new studentModel(studentData)
// if(await student.isUserExist(studentData.id)){
//     throw new Error("student allready exist")
// }
// const result = await student.save()// built in instance method}


//code for custom static method
if(Object.keys(newUser).length){
    studentData.id = newUser.id;
    studentData.user = newUser._id
    const newStudent = await studentModel.create(studentData)
    return newStudent
}

return newUser;

}


export const userServices = {
    createStudentIntoDb
}