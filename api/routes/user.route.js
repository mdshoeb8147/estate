import express from "express";
import { testRoute } from "../controller/user.controller.js";

const router = express.Router();

router.get("/test", testRoute);

export default router;
