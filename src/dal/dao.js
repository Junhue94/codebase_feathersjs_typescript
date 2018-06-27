"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const errors = require("feathers-errors");
const logger_1 = require("../modules/logger");
const mongoose = require("mongoose");
const develop_1 = require("../config/develop");
/**
 * DAL Base
 */
let Dao = class Dao {
    connectionStr(clinicCode) {
        return `mongodb://` +
            `${develop_1.configDevelop.DB_USER}:` +
            `${develop_1.configDevelop.DB_PASSWORD}@` +
            `${develop_1.configDevelop.DB_HOST}/` +
            `${develop_1.configDevelop.DB_NAME_PREFIX}${clinicCode}?` +
            `${develop_1.configDevelop.DB_PERMISSION}`;
    }
    saveOne(clinicCode, dataModel) {
        // Initialize mongodb connection
        const db = mongoose.connect(this.connectionStr(clinicCode));
        // Save data to database
        return db
            .then(() => {
            return dataModel.save();
        })
            .then((res) => {
            return res;
        })
            .catch((err) => {
            logger_1.logger.error(err.errors);
            return new errors.BadRequest('Request failed');
        });
    }
};
Dao = __decorate([
    inversify_1.injectable()
], Dao);
exports.Dao = Dao;
