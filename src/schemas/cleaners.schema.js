import { Schema, model } from "mongoose";

const cleanersSchema = new Schema({
    name: { type: String, required: true },
    phone_Number: { type: String, required: true },
    email: { type: String, required: true },
    raiting: { type: String },
    isAvailable: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Cleaners', cleanersSchema);