import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    name: { type: String },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    isCreator: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Admin', adminSchema);