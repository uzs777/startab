import { Router } from "express";
import admin from "../controller/admin.controller.js";
import { validator } from "../middlewares/validation-handle.js"
import adminValid from "../validations/user.validation.js";

const route = Router();

route
    .post("/", validator(adminValid.create), admin.create)
    .get("/", admin.findAll)
    .get("/:id", admin.finById)
    .patch("/pass/:id", validator(adminValid.updatePass), admin.updatePass)
    .patch("/:id", validator(adminValid.update), admin.update)
    .delete("/:id", validator(adminValid.delete), admin.delete)

export default route