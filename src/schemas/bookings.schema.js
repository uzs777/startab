import mongoose, { mongo } from "mongoose";

const bookingsSchema = new mongoose.Schema({
    user_id: { ref: "User", type: mongoose.Schema.Types.ObjectId, required: true },
    address_id: { ref: "Address", type: mongoose.Schema.Types.ObjectId, required: true },
    service_id: { ref: "CleaningService", type: mongoose.Schema.Types.ObjectId, required: true },
    scheduled_at: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },

}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model('Bookings', bookingsSchema);