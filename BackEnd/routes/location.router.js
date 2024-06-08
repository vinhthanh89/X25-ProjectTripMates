import { Router } from "express";
import { createLocation } from "../controller/location.controller.js";
import upload from "../middleware/upload.js";


const router = Router()

router.post('/create-location' , upload.single('thumbnail') , createLocation)

export default router