import { ApplicationError } from "./protocols";

export function notFound(message: string = "This could not be found."): ApplicationError{
    return {
        name: "notFound",
        message: message
    }
}
export function conflict(message: string = "This already exists."): ApplicationError{
    return {
        name: "conflict",
        message: message
    }
}
export function unprocessable(message: string = "This is not a valid entity"): ApplicationError{
    return {
        name: "unprocessable",
        message: message
    }
    
}
export function serverError(message: string = "Internal server error."): ApplicationError{
    return {
        name: "serverError",
        message: message
    }
}
export function badRequest(message: string = "Invalid request."): ApplicationError{
    return {
        name: "badRequest",
        message: message
    }
}