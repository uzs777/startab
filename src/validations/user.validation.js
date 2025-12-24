import Joi from 'joi';
import { Genders } from "../enums/admin.enums.js"

class UserValidator {
    static phoneRegex = /^\+998(90|91|93|94|95|97|98|55|33)\d{7}$/;
    static passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    create(data) {
        const user = Joi.object({
            fullName: Joi.string().required(),
            phoneNumber: Joi.string().regex(phoneRegex).required(),
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required(),
            male: Joi.string().valid(Genders.MALE, Genders.FEMALE).required()
        });
        return user.validate(data);
    }

    update(data) {
        const updatedUser = Joi.object({
            fullName: Joi.string().optional(),
            phoneNumber: Joi.string().regex(phoneRegex).optional(),
            email: Joi.string().optional(),
            male: Joi.string().valid(Genders.MALE, Genders.FEMALE).optional()
        });
        return updatedUser.validate(data);
    }

    updatePass(data) {
        const updatedUser = Joi.object({
            password: Joi.string().regex(passwordRegex).required()
        });
        return updatedUser.validate(data);
    }

    delete(data) {
        const deletUser = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required()
        })
    }
}

export default new UserValidator();