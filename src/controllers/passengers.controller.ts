import { Request, Response } from "express";
import httpStatus from "http-status";
import passengersService from "../services/passengers.service";

export const create = async (req: Request, res: Response) => {
    const data = req.body;
    const newPassenger = await passengersService.createPassenger(data);
    return res.status(httpStatus.CREATED).json(newPassenger);
}

export const read = async (req: Request, res: Response) => {
    const name = req.query["name"] as string;
    const passengers = await passengersService.getPassengers(name);
    return res.status(httpStatus.OK).json(passengers);
}

export const update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const data = req.body;
    const passengers = await passengersService.editPassenger(id, data);
    return res.status(httpStatus.OK).json(passengers);
}

export const remove = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const passengers = await passengersService.removePassenger(id);
    return res.status(httpStatus.OK).json(passengers);
}