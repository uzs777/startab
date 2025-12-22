import { Schema, model } from "mongoose";
import { Genders, Roles } from "../enums/admin.enums.js"

const userSchema = new Schema({
    fullName: { type: String},
    phoneNumber: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
    male: {
        type: String, enum: [
            Genders.FEMALE,
            Genders.MALE
        ]
    },
    role: {
        type: String, enum: [
            Roles.SUPERADMIN,
            Roles.ADMIN,
            Roles.CUSTOMER,
        ]
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('User', userSchema);