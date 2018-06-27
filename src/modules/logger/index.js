"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.logger = new Logger({
    transports: [
        new winston_1.transports.Console()
    ]
});
