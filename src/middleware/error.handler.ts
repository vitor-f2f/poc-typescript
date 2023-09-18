import httpStatus from "http-status";
import { Request, Response, NextFunction } from 'express';
import { ApplicationError, RequestError } from "./protocols";

export default function errorHandler(err: RequestError | ApplicationError | Error, _req: Request, res: Response, next: NextFunction) {
    console.log(err);

    if (err.name === "conflict") {
        return res.status(httpStatus.CONFLICT).send(err.message);
    }

    if (err.name === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(err.message);
    }

    if (err.name === "unprocessable") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
    }

    if (err.name === "servererr") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }

    if (err.name === "badRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(err.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong");
}