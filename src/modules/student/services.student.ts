import { Student } from "./interface.student"
import { studentModel } from './model.student';


const createStudentIntoDb = async(student:Student)=>{
const result = await studentModel.create(student)
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