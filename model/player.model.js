import { Schema, model } from "mongoose";

const playerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number, required: true, },
    rating: { type: Number, default: 1200 },
    country: { type: String, required: true, },
}, { timestamps: true })

export default model("Player", playerSchema)