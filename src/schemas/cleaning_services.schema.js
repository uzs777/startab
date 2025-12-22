import mongoose from "mongoose";

const cleaningServiceSchema = new mongoose.Schema({
    cleaners_id: { ref: "Cleaners", type: mongoose.Schema.Types.ObjectId, required: true },
    serviceCategory_id: { ref: "Service_Categories", type: mongoose.Schema.Types.ObjectId, required: true },
    basePrice: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model('CleaningService', cleaningServiceSchema);