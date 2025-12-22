import { Router } from "express";
import user from "../controller/user.controller.js";
import { validator } from "../middlewares/validation-handle.js"
import userValid from "../validations/user.validation.js"

const route = Router();

route
    .post("/", validator(userValid.create), user.create)
    .get("/", user.findAll)
    .get("/:id", user.finById)
    .patch("/pass/:id", validator(userValid.updatePass), user.updatePass)
    .patch("/:id", validator(userValid.update), user.update)
    .delete("/:id", validator(userValid.delete), user.delete)

export default route