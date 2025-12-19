import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: { type: String , required: true},
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

export default model('User', userSchema);