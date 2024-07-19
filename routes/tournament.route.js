import express from "express"
import tournamentController from "../controller/tournament.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"
import adminMiddleware from "../middleware/admin.middleware.js"

const router = express.Router()

router.post("/create", authMiddleware, adminMiddleware, tournamentController.create);
router.put("/assign-players/:id", authMiddleware, adminMiddleware, tournamentController.assignPlayer);
router.get("/get-all", authMiddleware, adminMiddleware, tournamentController.getTournaments);

export default router