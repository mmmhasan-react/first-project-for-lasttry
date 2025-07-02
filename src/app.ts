import express, { Request, Response } from 'express'

import cors from 'cors'
import { studentRouter } from './modules/student/route.student';
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/student',studentRouter)
app.get('/', (req:Request, res:Response)=>{
  res.send('Hello World!')
})


export default app