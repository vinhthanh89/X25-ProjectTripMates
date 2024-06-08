import { Router } from "express";
import { createLocation, getLocation, searchLocation } from "../controller/location.controller.js";
import upload from "../middleware/upload.js";


const router = Router()

router.post('/create-location' , upload.single('thumbnail') , createLocation)
router.get('/search-location' , searchLocation)
router.get('/get-location' , getLocation)

export default router