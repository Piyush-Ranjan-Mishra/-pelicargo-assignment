import { CorsOption, verifyToken } from "../middleware";
import express from "express";
import cors from "cors";
import { ServerInterface } from "./app.interface";
import baseRouter from "../modules/baseRouter";

class Server implements ServerInterface {
  async server(): Promise<express.Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(CorsOption));
    app.use(verifyToken);
    app.use("/api/v1", baseRouter.routes); //setting up base route
    return app;
  }
}

export default new Server();
