import Joi, { Schema } from "joi";

type PassengerSchema = {
    firstName: string;
    lastName: string;
}

const passengersSchema: Schema<PassengerSchema> = Joi.object({
    firstName: Joi.string().min(2).max(100).required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty",
        "string.min": "First name must have at least 2 characters",
        "string.max": "First name can have at most 100 characters",
    }),
    lastName: Joi.string().min(2).max(100).required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty",
        "string.min": "Last name must have at least 2 characters",
        "string.max": "Last name can have at most 100 characters",
    }),
});

export default passengersSchema;
