import { Router } from "express";
import app from "../../app";
import { studentRouter } from "../modules/student/route.student";
import { userRouter } from "../modules/user/user.route";


const router = Router()

const modulesRoutes = [
    {
        path:'/students',
        routes:studentRouter
    },
      {
        path:'/users',
        routes:userRouter
    },
]

modulesRoutes.forEach(routes=>router.use(routes.path, routes.routes))


export default router