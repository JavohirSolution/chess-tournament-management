import { Schema, model } from "mongoose";

const TournamentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true, },
    endDate: { type: Date },
    participants: [{ type: Schema.ObjectId, ref: "Player" }],
})

export default model("Tournament", TournamentSchema)