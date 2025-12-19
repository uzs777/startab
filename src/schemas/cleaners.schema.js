import { Schema, model } from "mongoose";

const cleanersSchema = new Schema({
    raiting: { type: String },
    isAvailable: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Cleaners', cleanersSchema);