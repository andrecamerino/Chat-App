import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// shows users in sidebar
router.get("/users", protectRoute, getUsersForSidebar);

// get chat history
router.get("/:id", protectRoute, getMessages)

// send messages
router.post("/send/:id", protectRoute, sendMessage)

export default router;
