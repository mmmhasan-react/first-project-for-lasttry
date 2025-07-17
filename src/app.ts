/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

import cors from 'cors'
import { studentRouter } from './modules/student/route.student';
import { userRouter } from './modules/user/user.route';
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/student',studentRouter)
app.use('/api/v1/users',userRouter)



// app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
//   const message = err.message || "Something went wrong";
//   const code = (err as any).statusCode || 500;

//   return res.status(code).json({
//     success: false,
//     message,
//     error: err,
//   });
// });

const errorHandler: ErrorRequestHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
  const code = (err as any).statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(code).json({
    success: false,
    message,
    error: err,
  });
};

app.use(errorHandler);


export default app