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

   const getStudent = async (req:Request, res:Response)=>{
    try{
    const result = await studentServices.getStudentFromtoDb()
    res.status(200).json({
    success:true,
    message:"student get success fully",
    data:result
    })
    }catch(err){
    console.log(err)
    }
    }


   const getSinlgeStudent = async (req:Request, res:Response)=>{
    const id = req.params.id
    console.log(id)
    try{
    const result = await studentServices.getSingleStudentFromDB(id)
    res.status(200).json({
    success:true,
    message:"get single student success fully",
    data:result,
    })
    }catch(err){
    console.log(err)
    }
    }

    export const studentController={
    createStudent,
    getStudent,
    getSinlgeStudent
    }
        