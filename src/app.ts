/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

import cors from 'cors'
import { studentRouter } from './app/modules/student/route.student';
import { userRouter } from './app/modules/user/user.route';
import errorHandler from './app/middleWare/globalErrorHandler';
import notFound from './app/middleWare/notFound';
import modulesRoutes from './app/routes/router';
const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/v1/users',modulesRoutes)
app.use(notFound)



app.use(errorHandler);


export default app