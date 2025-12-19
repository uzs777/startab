import Joi from 'joi'

class AdminValidator{
    static phoneRegex = /^\+998(90|91|93|94|95|97|98|55|33|)\d{7}$/;
    static passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    create(data) {
        const admin = Joi.object({
            fullName: Joi.string().optional(),
            phoneNumber: Joi.string().regex(phoneNumber).required(),
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required(),
            isCreator: Joi.boolean()
        });
        return admin.validate(data);
    }

    update(data) {
        const updatedAdmin = Joi.object({
                fullName: Joi.string().optional(),
                phoneNumber: Joi.string().regex(phoneNumber).required(),
                email: Joi.string().required(),
                password: Joi.string().regex(passwordRegex).required(),
                isCreator: Joi.boolean(),
                isActive: Joi.boolean().optional()
        });
        return updatedAdmin.validate(data);
    }
}

export default new AdminValidator()