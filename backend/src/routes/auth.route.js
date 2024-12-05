import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectRoute, checkAuth)

// protect route ensures auth, then allows update
router.put("/update-profile", protectRoute, updateProfile);

export default router;
