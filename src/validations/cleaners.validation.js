import Joi from 'joi';


class CleanerValidator {
    static phoneRegex = /^\+998(90|91|93|94|95|97|98|55|33)\d{7}$/;

    create(data) {
        const cleaner = Joi.object({
            name: Joi.string().required(),
            phoneNumber: Joi.string().regex(phoneRegex).required(),
            email: Joi.string().required(),
            raiting: Joi.string().optional(),
            isAvailable: Joi.boolean().optional()
        });
        return cleaner.validate(data);
    }

    update(data) {
        const updatedCleaner = Joi.object({
            name: Joi.string().optional(),
            phoneNumber: Joi.string().regex(phoneRegex).optional(),
            email: Joi.string().optional(),
            raiting: Joi.string().optional(),
            isAvailable: Joi.boolean().optional()
        });
        return updatedCleaner.validate(data);
    }

    updatePass(data) {
        const updatedCleaner = Joi.object({
            password: Joi.string().regex(passwordRegex).required()
        });
        return updatedCleaner.validate(data);
    }

    delete(data) {
        const deleteCleaner = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().regex(passwordRegex).required()
        })
    }
}

export default new CleanerValidator();