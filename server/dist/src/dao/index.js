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
exports.searchCards = exports.getCardsList = void 0;
const pexels_1 = require("pexels");
const config_1 = require("../config/config");
const pexelsClient = pexels_1.createClient(config_1.config.PEXELS_KEY);
const cleanResponse = (response) => {
    if (response.hasOwnProperty("error"))
        return response;
    const { page, per_page, photos, total_results } = response;
    return {
        page,
        per_page,
        total_results,
        photos: photos.map((el) => ({
            id: el.id,
            imageUrl: el.src.original,
            title: el.photographer,
            description: el.alt,
        })),
    };
};
const getCardsList = (page, per_page) => __awaiter(void 0, void 0, void 0, function* () {
    const photos = yield pexelsClient.photos.curated({
        page,
        per_page,
    });
    return cleanResponse(photos);
});
exports.getCardsList = getCardsList;
const searchCards = (query, page, per_page) => __awaiter(void 0, void 0, void 0, function* () {
    const search = yield pexelsClient.photos.search({
        query,
        page,
        per_page,
    });
    return cleanResponse(search);
});
exports.searchCards = searchCards;
//# sourceMappingURL=index.js.map