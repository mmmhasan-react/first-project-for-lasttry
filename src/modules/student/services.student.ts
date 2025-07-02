import { Student } from "./interface.student"
import { StudentModel } from "./model.student"

const createStudentIntoDb = async(student:Student)=>{
const result = await StudentModel.create(student)
return result;

}

export const studentServices = {
    createStudentIntoDb
}