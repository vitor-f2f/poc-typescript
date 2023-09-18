import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema"
import passengersSchema from "../schemas/passengers.schema"
import { create, read, update, remove } from "../controllers/passengers.controller"

const passengersRouter: Router = Router()

passengersRouter.post("/passengers", validateSchema(passengersSchema), create)
passengersRouter.get("/passengers", read);
passengersRouter.put("/passengers/:id", validateSchema(passengersSchema), update);
passengersRouter.delete("/passengers/:id", remove);

export default passengersRouter;