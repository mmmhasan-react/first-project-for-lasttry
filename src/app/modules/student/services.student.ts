
import { studentModel } from './model.student';



const getStudentFromtoDb = async()=>{
const result = await studentModel.find()
return result;

}

const getSingleStudentFromDB = async(id:string)=>{
const result = await studentModel.findOne({id})
return result;

}

const deleteStudentFromDB = async(id:string)=>{
const result = await studentModel.updateOne({id},{isDeleated:true})
return result;

}

export const studentServices = {

    getStudentFromtoDb,
    getSingleStudentFromDB,
    deleteStudentFromDB
}