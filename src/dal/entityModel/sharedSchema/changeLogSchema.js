"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.changeLogSchema = new mongoose_1.Schema({
    user: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
});
