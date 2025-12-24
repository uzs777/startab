import { Router} from 'express';
import { envConfig} from '../config/index.js'
import { authGuard } from '../guards/auth-token.guard.js'
import { roleGuard } from '../guards/role.guard.js'
import category from '../controller/service_categories.controller.js'
import categoryValid from '../validations/service_category.validation.js'
import { validator } from'../middlewares/validation-handle.js'


const router = Router()

router 
    .post("/",authGuard ,roleGuard(envConfig.SUPERADMIN), validator(categoryValid.create),category.create)
    .get("/",authGuard ,roleGuard(envConfig.SUPERADMIN), category.findAll)
    .get("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), category.finById)
    .patch("/:id", authGuard ,roleGuard(envConfig.SUPERADMIN,'ID'),validator(categoryValid.update), category.update)
    .delete("/:id",authGuard ,roleGuard(envConfig.SUPERADMIN, 'ID'), validator(categoryValid.delete), category.delete)

export default router