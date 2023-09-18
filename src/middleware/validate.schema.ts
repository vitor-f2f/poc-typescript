import { stripHtml } from 'string-strip-html';
import { Request, Response, NextFunction } from 'express';
import { unprocessable } from './error.types';

type Schema = {
    validate: (data: any, options?: any) => { error: { details: { message: string }[] } };
};

export function validateSchema(schema: Schema) {
    return function (req: Request, res: Response, next: NextFunction) {
        const cleanData: Record<string, any> = {};

        for (const [key, value] of Object.entries(req.body)) {
            cleanData[key] = typeof value === 'string' ? stripHtml(value).result.trim() : value;
        }

        const { error } = schema.validate(cleanData, { abortEarly: false });

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(" ");
            throw unprocessable(errorMessage)
        }
        next();
    };
}