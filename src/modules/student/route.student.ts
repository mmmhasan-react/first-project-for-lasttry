import express from 'express'
import { studentController } from './controller.student'

const router = express.Router()

router.post('/create-student/',studentController.createStudent)

export const studentRouter = router