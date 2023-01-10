import * as dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

mongoose.connect(process.env["MONGO_URL"]!)

const db = mongoose.connection;

export default db;
