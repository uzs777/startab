import { Router } from "express";
import userRoute from "./user.routes.js"
import adminRoute from "./admin.routes.js"

const router = Router();

router
    .use("user", userRoute)
    .use("admin", adminRoute)


export default router