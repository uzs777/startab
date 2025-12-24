import Admin from "../schemas/user.schema.js"
import { catchAsync } from "../middlewares/catch-async.js";
import hashData from "../utils/hash-data.js";
import { BaseController } from "./base.controller.js";
import { Roles } from "../enums/admin.enums.js";
import { succesRes } from "../utils/success-res.js";
import { ApiError } from "../utils/custom-error.js";

class adminController extends BaseController {
    create = catchAsync(async (req, res) => {
        const { phoneNumber, email, Password } = req.body;
        await this._isExist({ phoneNumber }, "phone number");
        await this._isExist({ email }, "email name");
        const hashedPass = await hashData.decode(Password);
        delete req.body?.Password;
        const newAdmin = await Admin.create({
            hashedPass,
            role: Roles.ADMIN,
            ...req.body
        });
        return succesRes(res, newAdmin);
    });

    update = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const { phoneNumber, email, Password } = req.body;
        const admin = this._getById(id);
        if (phoneNumber) await this._isExistId(id, { phoneNumber }, "phone number");
        if (email) await this._isExistId(id, { email }, "email name");
        const newAdmin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
        return succesRes(res, newAdmin);
    });

    updatePass = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const admin = await this._getById(id);
        const { OldPass, NewPass } = req.body;
        if (!OldPass && req.user.role === Roles.SUPERADMIN) {
            throw new ApiError("Old password is required", 400);
        };
        if (OldPass) {
            const IsMatch = await hashData.encode(OldPass, admin.hashedPass);
            if (!IsMatch) {
                throw new ApiError("Old password does not match", 400);
            }
        };
        const hashedPass = await hashData.decode(NewPass);
        const NewAdminPass = await Admin.findByIdAndUpdate(id, { hashedPass }, { new: true });
        return succesRes(res, NewAdminPass)
    });

    delete = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const { email, Password } = req.body;
        const admin = this._getById(id);
        if (!email && admin.email === email) {
            throw new ApiError("Verification failed. Please check your information and try again.!!", 404);
        };
        if (!Password && admin.hashedPass === Password) {
            throw new ApiError("Verification failed. Please check your information and try again.!!", 404);
        };
        await Admin.findByIdAndDelete(id);
        return succesRes(res, {});
    });
}

export default new adminController()