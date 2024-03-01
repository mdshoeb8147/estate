import express from "express";
import { deleteUser, testRoute } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testRoute);
router.delete("delete/:id", verifyToken, deleteUser);

export default router;
