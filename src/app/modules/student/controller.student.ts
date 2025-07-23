    import { NextFunction, Request, Response } from "express";
    import { studentServices } from "./services.student";
import sendResponse from "../../middleWare/utils/sendResponse";
import status from "http-status";
    



   const getStudent = async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const result = await studentServices.getStudentFromtoDb()

    sendResponse(res, {
        statusCode:status.OK,
        message:"student get successrully",
        success:true,
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
    sendResponse(res, {
        statusCode:status.OK,
        message:" getSinlgeStudent student successfully created",
        success:true,
        data:result
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
     sendResponse(res, {
        statusCode:status.OK,
        message:" deleteStudentFrom successfully created",
        success:true,
        data:result
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
        