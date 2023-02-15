import { Request } from "express";
export interface ICardService {
  getCards(req: Request): Promise<any>;
}
