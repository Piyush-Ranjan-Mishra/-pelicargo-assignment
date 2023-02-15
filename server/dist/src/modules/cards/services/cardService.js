"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../../helpers/logger");
const dao_1 = require("../../../dao");
const config_1 = require("../../../config/config");
class CardService {
    getCards(req) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req === null || req === void 0 ? void 0 : req.query;
                const page = parseInt((_b = (_a = query === null || query === void 0 ? void 0 : query.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "1", 10);
                const per_page = parseInt(((_c = query === null || query === void 0 ? void 0 : query.per_page) === null || _c === void 0 ? void 0 : _c.toString()) || config_1.config.PER_PAGE);
                if (query === null || query === void 0 ? void 0 : query.search) {
                    return dao_1.searchCards((_d = query === null || query === void 0 ? void 0 : query.search) === null || _d === void 0 ? void 0 : _d.toString(), page, per_page);
                }
                return dao_1.getCardsList(page, per_page);
            }
            catch (error) {
                console.error({ error });
                logger_1.logger.error(error);
                return error;
            }
        });
    }
}
exports.default = new CardService();
//# sourceMappingURL=cardService.js.map