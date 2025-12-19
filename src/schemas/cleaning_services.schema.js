import { Schema, model } from "mongoose";

const cleaningServiceSchema = new Schema({
    serviceCategory_id: { type: String },
    basePrice: { type: String },
    priceUnit: { type: String },
    isActive: { type: Boolean, default: true},
    cleaners_id: {type: String}
}, {
    versionKey: false,
    timestamps: true
});

export default model('CleaningService', cleaningServiceSchema);