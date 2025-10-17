import express from "express"
import usersController from "../controller/users.controller.js"
import validationMiddleware from "../middleware/validation.middleware.js"

const router = express.Router()

router.get("/users", usersController.getUsers)
router.post("/users", validationMiddleware.validateUser, usersController.postUsers)
router.patch("/users/:id", validationMiddleware.validateUser, usersController.patchUsers)

export default router

