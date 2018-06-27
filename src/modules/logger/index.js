"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    format: winston_1.format.simple(),
    transports: [
        new winston_1.transports.Console()
    ]
});
