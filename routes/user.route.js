import express from "express"
import userController from "../controller/user.controller.js"

const router = express.Router()

router.get("/users", userController.getAll)
router.post("/register", userController.create)

export default router