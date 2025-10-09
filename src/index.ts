import * as Server from "./utils/logger.js";
import dotenv from "dotenv"
dotenv.config()


Server.conectServ(Number(process.env.PORT));