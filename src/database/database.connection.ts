import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: false
};

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

const db = new Pool(configDatabase);

db.query("SELECT 1")
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao banco de dados:", error.message);
    });

export default db;

/*
CREATE TABLE passengers (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT
);
*/