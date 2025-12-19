import { Schema, model } from "mongoose";

const addressSchema = new Schema({
    label: { type: String },
    street: { type: Text },
    city: { type: String },
    user_id: {}
}, {
    versionKey: false,
    timestamps: true
});

export default model('Address', addressSchema);