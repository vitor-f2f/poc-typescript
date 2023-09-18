import db from "../database/database.connection";
import { QueryResult } from "pg";

type Passenger = {
    id: string;
    firstName: string;
    lastName: string;
}

const addPassenger = async (first: string, last: string): Promise<Passenger> => {
    const res: QueryResult = await db.query("INSERT INTO passengers (firstName, lastName) VALUES ($1, $2) RETURNING *", [first, last]);
    return res.rows[0];
}

const checkPassenger = async (id: string): Promise<boolean> => {
    const res: QueryResult = await db.query("SELECT * FROM passengers WHERE id = $1", [id]);
    return res.rowCount > 0;
}

const getList = async (name: string): Promise<Passenger[]> => {
    let query = `
        SELECT * FROM passengers
    `;
    const params = [];

    if (name) {
        query += ` WHERE CONCAT(passengers.firstName, ' ', passengers.lastName) ILIKE $1`;
        params.push(`%${name}%`);
    }
    query += `;`;

    const res: QueryResult = await db.query(query, params);
    return res.rows;
}

const editPassenger = async (first: string, last: string, id: string): Promise<Passenger> => {
    const res: QueryResult = await db.query("UPDATE passengers SET firstName = $1, lastName = $2 WHERE id = $3 RETURNING *", [first, last, id]);
    if (res.rowCount === 0) {
        return null;
    }
    return res.rows[0];
}

const removePassenger = async (id: string): Promise<boolean> => {
    const res: QueryResult = await db.query("DELETE FROM passengers WHERE id = $1", [id])
    return res.rowCount > 0;
}

const passengersRepository = {
    addPassenger,
    checkPassenger,
    getList,
    editPassenger,
    removePassenger
}

export default passengersRepository;