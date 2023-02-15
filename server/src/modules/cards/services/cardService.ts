import { ICardService } from "./cardService.interface";
import { logger } from "../../../helpers/logger";
import { Request } from "express";
import { getCardsList, searchCards } from "../../../dao";
import { config } from "../../../config/config";

class CardService implements ICardService {
  async getCards(req: Request): Promise<any> {
    try {
      const query = req?.query;
      const page = parseInt(query?.page?.toString() ?? "1", 10);
      const per_page = parseInt(query?.per_page?.toString() || config.PER_PAGE);
      if (!!query?.query && query.query !== "null") {
        return searchCards(query?.query?.toString(), page, per_page);
      }
      return getCardsList(page, per_page);
    } catch (error) {
      logger.error({error});
      return error;
    }
  }
}

export default new CardService();
