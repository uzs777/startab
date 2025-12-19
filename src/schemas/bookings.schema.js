import { Schema, model } from "mongoose";

const bookingsSchema = new Schema({
    user_id: { type: String },
    address_id: { type: String },
    service_id: { type: String },
    totalPrice: { type: Number },
    status: { type: String },

}, {
    versionKey: false,
    timestamps: true
});

export default model('Bookings', bookingsSchema);