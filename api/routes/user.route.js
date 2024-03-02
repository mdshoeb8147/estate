import express from "express";
import {
  deleteUser,
  testRoute,
  getUserListing,
} from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testRoute);
router.delete("delete/:id", verifyToken, deleteUser);
router.get("/listing/:id", verifyToken, getUserListing);
export default router;
