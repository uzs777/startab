import { Router } from "express";
import bookingValid from '../validations/bookings.validation.js';
import { envConfig } from "../config/index.js";
import { authGuard } from "../guards/auth-token.guard.js";
import { roleGuard } from '../guards/role.guard.js';
import booking from '../controller/bookings.controller.js';
import { validator } from'../middlewares/validation-handle.js'


const router = Router();

router 
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(bookingValid.create),booking.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), booking.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), booking.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(bookingValid.update), booking.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(bookingValid.delete), booking.delete)

export default router