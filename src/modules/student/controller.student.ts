    import { Request, Response } from "express";
    import { studentServices } from "./services.student";

    const createStudent = async (req:Request, res:Response)=>{
    try{
    const {students} = req.body;
    console.log(students)
    const result = await studentServices.createStudentIntoDb(students)
    res.status(200).json({
    success:true,
    message:"student created success fully",
    data:result
    })
    }catch(err){
    console.log(err)
    }
    }
    export const studentController={
    createStudent
    }
        