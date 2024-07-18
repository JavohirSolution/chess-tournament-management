import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import db from "./config/db.js"
import bodyParser from "body-parser";
const app = express()

dotenv.config()

// Middleware
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({}))

// Use Routes
import userRoute from './routes/user.route.js'
import playerRoute from './routes/player.route.js'
import matchRoute from './routes/match.route.js'
import tournamentRoute from './routes/tournament.route.js'

app.use("/api/user", userRoute)
app.use("/api/player", playerRoute)
app.use("/api/match", matchRoute)
app.use("/api/tournament", tournamentRoute)

const PORT = process.env.PORT || 8000
db()
app.listen(PORT, () => {
    console.log("[server]: Server is running at port " + PORT)
})