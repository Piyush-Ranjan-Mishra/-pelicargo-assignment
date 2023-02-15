import { Request, Response, Router } from "express";
import { IRouter } from "../router.interface";
import userService from "./services/cardService";
const router = Router();

class UserRouter implements IRouter {
  get routes() {
    router.get("/", async (req: Request, res: Response) => {
      try {
        const result = await userService.getCards(req);
        return res.json(result);
      } catch (err) {
        throw err;
      }
    });
    return router;
  }
}

export default new UserRouter();
