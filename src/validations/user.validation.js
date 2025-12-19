import Joi from 'joi';

class UserValidator {
    static phoneRegex = /^\+998(90|91|93|94|95|97|98|55|33)\d{7}$/;
    static passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    create(data) {
        const user = Joi.object({
            fullName: Joi.string().required(),
            phoneNumber: Joi.string().regex(phoneRegex).required(),
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required()
        });
        return user.validate(data);
    }

    update(data) {
        const updatedUser = Joi.object({
            fullName: Joi.string().required(),
            phoneNumber: Joi.string().regex(phoneRegex).required(),
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required()
        });
        return updatedUser.validate(data);
    }
}

export default new UserValidator