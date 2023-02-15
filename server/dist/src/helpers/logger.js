"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    level: "info",
    format: winston_1.format.json(),
    transports: [
        new winston_1.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.transports.File({ filename: "combined.log" }),
    ],
});
//# sourceMappingURL=logger.js.map