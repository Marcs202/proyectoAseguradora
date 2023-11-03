import { config } from "dotenv";

config();
const nameUser = process.env.DB_USER;
const passUser= process.env.DB_PASSWORD;
const server = process.env.DB_SERVER;
const dbName = process.env.DB_NAME;

export const sqlConfig = {
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      trustServerCertificate: true, // change to true for local dev / self-signed certs
      
    }
}
console.log(nameUser);
console.log(passUser);
console.log(server);