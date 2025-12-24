import { Router } from "express";
import { envConfig } from '../config/index.js';
import { authGuard } from '../guards/auth-token.guard.js'
import { roleGuard } from '../guards/role.guard.js'
import payment from '../controller/payements.controller.js'
import paymentValid from '../validations/payements.validation.js'
import { validator } from'../middlewares/validation-handle.js'


const router = Router()

router
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(paymentValid.create),payment.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), payment.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), payment.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(paymentValid.update), payment.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(paymentValid.delete), payment.delete)

export default router