import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import status from "http-status";

const notFound = (req:Request, res:Response, next:NextFunction) => {


  res.status(status.NOT_FOUND).json({
    success: false,
    message:"api not found",
    error:''
  });
};

export default notFound;
