import { Schema, model } from "mongoose";

const serviceCategoriesSchema = new Schema({
    name: { type: String },
    description: {type: Text },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Service_Categories', serviceCategoriesSchema);