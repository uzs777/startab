import SUPERADMIN from "../schemas/user.schema.js"
import { Roles } from "../enums/admin.enums.js";
import { envConfig } from '../config/index.js';
import hashData from "../utils/hash-data.js";

export async function createSuperAdmin() {
    try {
        const existsSuperAdmin = await SUPERADMIN.findOne({ role: Roles.SUPERADMIN });
        if (!existsSuperAdmin) {
            const superAdmin = await SUPERADMIN.create({
                role: Roles.SUPERADMIN,
                phoneNumber: envConfig.SUPERADMIN.PHONE,
                Password: await hashData.decode(envConfig.SUPERADMIN.PASSWORD),
                email: envConfig.SUPERADMIN.EMAIL
            })
        }
    } catch (error) {
        console.error("Error on create super Admin ", error);
    }
}