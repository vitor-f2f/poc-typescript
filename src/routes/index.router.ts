import { Router } from "express";
import passengersRouter from "./passengers.router";
passengersRouter

const router: Router = Router();

router.use(passengersRouter);

export default router;
