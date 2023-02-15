import { config } from "./../config/config";
import express from "express";
import cors from "cors";
import { ServerInterface } from "./app.interface";
import baseRouter from "../modules/baseRouter";

class Server implements ServerInterface {
  async server(): Promise<express.Application> {
    const app = express();
    const corsOptions = {
      origin: config.ALLOW_ORIGIN,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(corsOptions));
    app.use("/api/v1", baseRouter.routes); //setting up base route
    return app;
  }
}

export default new Server();
