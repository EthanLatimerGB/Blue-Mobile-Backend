import { config } from "dotenv";
config();

export const port = process.env.PORT;

export const mongoPassword = process.env.MONGOPSWD;