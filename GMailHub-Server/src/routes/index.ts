import { getHome } from "@/controllers";
import { Router } from "express";


const router = Router();

router.get("/", getHome);

export default router;
