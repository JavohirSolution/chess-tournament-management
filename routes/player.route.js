import express from "express"
import playerController from "../controller/player.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"
import adminMiddleware from "../middleware/admin.middleware.js"

const router = express.Router()

router.post("/create", authMiddleware, adminMiddleware, playerController.create)
router.put("/update/:id", authMiddleware, adminMiddleware, playerController.update)
router.delete("/delete/:id", authMiddleware, adminMiddleware, playerController.delete)
router.get("/view/:id", authMiddleware, adminMiddleware, playerController.view)

export default router