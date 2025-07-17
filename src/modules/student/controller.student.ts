    import { NextFunction, Request, Response } from "express";
    import { studentServices } from "./services.student";
    



   const getStudent = async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const result = await studentServices.getStudentFromtoDb()
    res.status(200).json({
    success:true,
    message:"student get success fully",
    data:result
    })
    }catch(err){
      next(err)
    }
    }


   const getSinlgeStudent = async (req:Request, res:Response, next:NextFunction)=>{
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
    next(err)
        }
        }

    const deleteStudent = async (req:Request, res:Response, next:NextFunction)=>{
    const id = req.params.id
    console.log(id)
    try{
    const result = await studentServices.deleteStudentFromDB(id)
    res.status(200).json({
    success:true,
    message:"get single student success fully",
    data:result,
    })
    }catch(err){
    next(err)
    }
    }

    export const studentController={
    getStudent,
    getSinlgeStudent,
    deleteStudent
    }
        