import mongoose from "mongoose";

const payementsSchema = new Schema({
    booking_id: { ref: "Bookings", type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true },
    paid_at: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Payement', payementsSchema);