import dotenv from "dotenv";
dotenv.config();

const PORT: number = parseInt(process.env.PORT!);

export { PORT };