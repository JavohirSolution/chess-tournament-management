import { Schema, model } from "mongoose";

const matchSchema = new Schema({
    player1: { type: Schema.ObjectId, ref: "Player", required: true },
    player2: { type: Schema.ObjectId, ref: "Player", required: true },
    tournamet: { type: Schema.ObjectId, ref: "Tournament", required: true },
    round: { type: Number, required: true },
    score: {
        player1: { type: Number, default: 0 },
        player2: { type: Number, default: 0 },
    },
    winner: { type: Schema.ObjectId, ref: "Player", required: true }
})

export default model("Match", matchSchema)