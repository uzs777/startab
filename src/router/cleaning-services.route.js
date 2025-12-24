import { Router } from "express";
import { envConfig } from '../config/index.js';
import { authGuard } from '../guards/auth-token.guard.js';
import { roleGuard } from "../guards/role.guard.js";
import cleaningService from '../controller/cleaning_services.controller.js'
import cleaningServiceValid from '../validations/cleaning_services.validation.js'
import { validator } from'../middlewares/validation-handle.js'


const router = Router()

router
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(cleaningServiceValid.create),cleaningService.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), cleaningService.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), cleaningService.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(cleaningServiceValid.update), cleaningService.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(cleaningServiceValid.delete), cleaningService.delete)

export default router