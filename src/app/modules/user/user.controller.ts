import { NextFunction, Request, Response } from "express";

// import { studentZodSchema } from "../student/zod.validation";

import { userServices } from "./user.service";
import sendResponse from "../../middleWare/utils/sendResponse";
import status from "http-status";


    const createStudent = async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const {passwords, students} = req.body

    // const zodParseDdata = studentZodSchema.parse(students);

   

    const result = await userServices.createStudentIntoDb(passwords, students)
 

    sendResponse(res, {
        statusCode:status.OK,
        message:"student successfully created",
        success:true,
        data:result
    })

    }catch(err)
    {next(err)
    }
    }

    export const userController = {
        createStudent
    }