import { BaseController } from "./base.controller.js";
import { catchAsync } from "../middlewares/catch-async.js"
import hashData from "../utils/hash-data.js";
import User from "../schemas/user.schema.js"
import { succesRes } from "../utils/success-res.js"
import { Roles } from "../enums/admin.enums.js";
import { ApiError } from "../utils/custom-error.js";

class UserController extends BaseController {
    create = catchAsync(async (req, res) => {
        const { phoneNumber, email, Password, id } = req.body;
        await this._isExistId(id, { phoneNumber }, "Phone number");
        await this._isExistId(id, { email }, "email name");
        const hashedPass = await hashData.decode(Password);
        delete req.body?.Password;
        const newUser = await User.create({
            hashedPass,
            role: Roles.CUSTOMER,
            ...req.body
        });
        return succesRes(res, newUser)
    });

    update = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const user = await this._getById(id);
        const { phoneNumber, email } = req.body;
        if (phoneNumber) await this._isExistId(id, { phoneNumber }, "phone number");
        if (email) await this._isExistId(id, { email }, "email name ");
        const newUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        return succesRes(res, newUser)
    });

    updatePass = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const user = await this._getById(id);
        const { OldPass, NewPass } = req.body;
        if (!OldPass && req.user.role === Roles.SUPERADMIN) {
            throw new ApiError("Old password is required", 400);
        };
        if (!OldPass && req.user.role === Roles.ADMIN) {
            throw new ApiError("Old password is required", 400);
        };
        if (OldPass) {
            const isMatch = await hashData.encode(OldPass, user.hashedPass);
            if (!isMatch) {
                throw new ApiError('Old password does not match', 400);
            };
        };
        const hashedPass = await hashData.decode(NewPass);
        const NewPassUser = await User.findByIdAndUpdate(id, { hashedPass }, { new: true });
        return succesRes(res, NewPassUser);
    });

    delete = catchAsync(async (req, res) => {
        const id = req.params?.id;
        const user = this._getById(id);
        const { email, Password } = req.body;
        if (!email && user.email === email) {
            throw new ApiError("Verification failed. Please check your information and try again.!!", 404)
        };
        if (!Password && user.hashedPass === Password) {
            throw new ApiError("Verification failed. Please check your information and try again.!!", 400)
        };
        await User.findByIdAndDelete(id);
        return succesRes(res, {})
    })
}

export default new UserController()