import Joi from 'joi';

class CleaningServiceValidator {
    
    create(data) {
        const cleaningService = Joi.object({
            cleaning_id: Joi.string().required(),
            serviceCategory_id: Joi.string().required(),
            basePrice: Joi.number().required(),
            is_Active: Joi.boolean().optional()
        });
        return cleaningService.validate(data);
    }

    update(data) {
        const updatedcleaningService = Joi.object({
            cleaning_id: Joi.string().optional(),
            serviceCategory_id: Joi.string().optional(),
            basePrice: Joi.number().optional(),
            is_Active: Joi.boolean().optional()
        });
        return updatedcleaningService.validate(data);
    }
}

export default new CleaningServiceValidator();