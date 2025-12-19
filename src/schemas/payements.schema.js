import { Schema, model } from "mongoose";

const payementsSchema = new Schema({
    booking_id: { type: String },
    amount: { type: String },
    method: { type: String },
    status: { type: String },
    paid_at: { type: String } 
}, {
    versionKey: false,
    timestamps: true
});

export default model('Payement', payementsSchema);