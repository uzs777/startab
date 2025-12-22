import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    label: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    userId: { ref: "User", type: mongoose.Schema.Types.ObjectId, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model('Address', addressSchema);