import { NextFunction, Request, Response } from "express";

// import { studentZodSchema } from "../student/zod.validation";

import { userServices } from "./user.service";


    const createStudent = async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const {passwords, students} = req.body

    // const zodParseDdata = studentZodSchema.parse(students);

   

    const result = await userServices.createStudentIntoDb(passwords, students)
 
    res.status(200).json({
    success:true,
    message:"student created success fully",
    data:result
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err)
    {next(err)
    }
    }

    export const userController = {
        createStudent
    }