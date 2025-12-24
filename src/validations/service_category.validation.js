import Joi from 'joi';

class ServiceCategortValidator {
    
    create(data) {
        const serviceCategory = Joi.object({
            name: Joi.string().required(),
            descriptin: Joi.string().required()
        });
        return serviceCategory.validate(data);
    }

    update(data) {
        const updatedserviceCategory = Joi.object({
            name: Joi.string().optional(),
            descriptin: Joi.string().optional()
        });
        return updatedserviceCategory.validate(data);
    }
}

export default new ServiceCategortValidator();