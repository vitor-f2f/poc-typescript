import { badRequest, serverError } from "../middleware/error.types";
import passengersRepository from "../repositories/passengers.repository";

const createPassenger = async (data: any) => {
    const newPassenger = await passengersRepository.addPassenger(data.firstName, data.lastName);
    return newPassenger;
}

const getPassengers = async (name: string) => {
    const list = await passengersRepository.getList(name);
    return list;
}

const editPassenger = async (id: string, data: any) => {
    const exists = await passengersRepository.checkPassenger(id);
    if (!exists) {
        throw badRequest("Passenger not found.");
    }
    const update = await passengersRepository.editPassenger(data.firstName, data.lastName, id);
    return update;
}

const removePassenger = async (id: string) => {
    const exists = await passengersRepository.checkPassenger(id);
    if (!exists) {
        throw badRequest("Passenger not found.");
    }
    const remove = await passengersRepository.removePassenger(id);
    return remove;
}

const passengersService = {
    createPassenger,
    getPassengers,
    editPassenger,
    removePassenger
};

export default passengersService;