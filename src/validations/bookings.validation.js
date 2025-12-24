import Joi from 'joi';

class BookingValidator {
    
    create(data) {
        const booking = Joi.object({
            user_id: Joi.string().required(),
            address_id: Joi.string().required(),
            service_id: Joi.string().required(),
            scheduled_at: Joi.string().required(),
            totalPrice: Joi.string().required(),
            status: Joi.string().required()
        });
        return booking.validate(data);
    }

    update(data) {
        const updatedBooking = Joi.object({
            user_id: Joi.string().optional(),
            address_id: Joi.string().optional(),
            service_id: Joi.string().optional(),
            scheduled_at: Joi.string().optional(),
            totalPrice: Joi.string().optional(),
            status: Joi.string().optional()
        });
        return updatedBooking.validate(data);
    }
}

export default new BookingValidator();