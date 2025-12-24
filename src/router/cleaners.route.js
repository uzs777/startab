import { Router } from "express";
import { envConfig } from '../config/index.js';
import { authGuard } from '../guards/auth-token.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import cleaners from '../controller/cleaners.controller.js';
import cleanersValid from '../validations/cleaners.validation.js'
import { validator } from'../middlewares/validation-handle.js'


const router = Router();

router
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(cleanersValid.create),cleaners.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), cleaners.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), cleaners.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(cleanersValid.update), cleaners.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(cleanersValid.delete), cleaners.delete)

export default router