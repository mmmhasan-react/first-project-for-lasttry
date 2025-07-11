import { TStudent } from "./interface.student"
import { studentModel } from './model.student';


const createStudentIntoDb = async(studentData:TStudent)=>{
    if(await studentModel.isUserExist(studentData.id)){
    throw new Error("from custom static, user already exist")
}
const result = await studentModel.create(studentData)// built in static method
//{code for implementing custom instance method 
// // const student = new studentModel(studentData)
// if(await student.isUserExist(studentData.id)){
//     throw new Error("student allready exist")
// }
// const result = await student.save()// built in instance method}


//code for custom static method


return result;

}

const getStudentFromtoDb = async()=>{
const result = await studentModel.find()
return result;

}

const getSingleStudentFromDB = async(id:string)=>{
const result = await studentModel.findOne({id})
return result;

}

export const studentServices = {
    createStudentIntoDb,
    getStudentFromtoDb,
    getSingleStudentFromDB
}