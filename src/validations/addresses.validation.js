import Joi from 'joi';

class AddressValidator {
    
    create(data) {
        const address = Joi.object({
            user_id: Joi.string().required(),
            label: Joi.string().required(),
            street: Joi.string().required(),
            city: Joi.string().required()
        });
        return address.validate(data);
    }

    update(data) {
        const updatedAddress = Joi.object({
            user_id: Joi.string().optional(),
            label: Joi.string().optional(),
            street: Joi.string().optional(),
            city: Joi.string().optional()
        });
        return updatedAddress.validate(data);
    }
}

export default new AddressValidator();