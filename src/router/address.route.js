import { Router } from 'express';
import { envConfig } from '../config/index.js';
import { authGuard } from '../guards/auth-token.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import address from '../controller/addresses.controller.js';
import addressValid from '../validations/addresses.validation.js ';
import { validator } from'../middlewares/validation-handle.js'

const router = Router();

router
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(addressValid.create),address.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), address.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), address.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(addressValid.update), address.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(addressValid.delete), address.delete)

export default router