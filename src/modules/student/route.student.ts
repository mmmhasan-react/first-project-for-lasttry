import express from 'express'
import { studentController } from './controller.student'

const router = express.Router()

router.post('/create-student/',studentController.createStudent)
router.get('/get-student/',studentController.getStudent)
router.get('/get-a-student/:id',studentController.getSinlgeStudent)
router.delete('/delete-a-student/:id',studentController.deleteStudent)



export const studentRouter = router