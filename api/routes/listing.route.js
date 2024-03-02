import express from "express";
import { createListing } from "../controller/listing.controller";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/create", verifyToken, createListing);
export default router;
