    import { Request, Response } from "express";
    import { studentServices } from "./services.student";
import { studentZodSchema } from "./zod.validation";
    

    const createStudent = async (req:Request, res:Response)=>{
    try{
    const {students} = req.body

    const zodParseDdata = studentZodSchema.parse(students);

    console.log(zodParseDdata)

    const result = await studentServices.createStudentIntoDb(zodParseDdata)
    console.log(zodParseDdata)
    res.status(200).json({
    success:true,
    message:"student created success fully",
    data:result
    })
    }catch(err){
   res.status(400).json({
    success:false,
    message:"some thing wrong",
    error:err
    })
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
  res.status(200).json({
    success:false,
    message:"some thing wrong",
    error:err
    })
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
res.status(200).json({
    success:false,
    message:"some thing wrong",
    error:err
    })
    }
    }

    export const studentController={
    createStudent,
    getStudent,
    getSinlgeStudent
    }
        