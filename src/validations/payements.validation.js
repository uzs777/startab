import Joi from 'joi';

class PayementsValidator {
    
    create(data) {
        const payements = Joi.object({
            booking_id: Joi.string().required(),
            amount: Joi.string().required(),
            method: Joi.string().required(),
            status: Joi.string().required(),
            paid_at: Joi.string().required(),
        });
        return payements.validate(data);
    }

    update(data) {
        const updatedPayements = Joi.object({
            booking_id: Joi.string().optional(),
            amount: Joi.string().optional(),
            method: Joi.string().optional(),
            status: Joi.string().optional(),
            paid_at: Joi.string().optional(),
        });
        return updatedPayements.validate(data);
    }
}

export default new PayementsValidator();