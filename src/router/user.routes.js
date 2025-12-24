import { Router } from "express";
import user from "../controller/user.controller.js";
import { validator } from "../middlewares/validation-handle.js"
import userValid from "../validations/user.validation.js"
import { authGuard } from '../guards/auth-token.guard.js'
import { roleGuard } from "../guards/role.guard.js";
import { envConfig } from '../config/index.js'

const route = Router();

route
    .post("/", authGuard ,roleGuard(envConfig.SUPERADMIN),validator(userValid.create), user.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), user.findAll)
    .get("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),user.finById)
    .patch("/pass/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'),validator(userValid.updatePass), user.updatePass)
    .patch("/:id", validator(userValid.update), user.update)
    .delete("/:id", validator(userValid.delete), user.delete)

export default route