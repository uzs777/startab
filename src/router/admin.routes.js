import { Router } from "express";
import admin from "../controller/admin.controller.js";
import { validator } from "../middlewares/validation-handle.js"
import adminValid from "../validations/user.validation.js";
import { authGuard } from '../guards/auth-token.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import { envConfig } from "../config/index.js";

const route = Router();

route
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(adminValid.create), admin.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), admin.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), admin.finById)
    .patch("/pass/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(adminValid.updatePass), admin.updatePass)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(adminValid.update), admin.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(adminValid.delete), admin.delete)

export default route