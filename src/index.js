"use strict";
/**
 * Application Instantiation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mainApp_1 = require("./mainApp");
const logger_1 = require("./modules/logger");
const production_1 = require("./config/production");
const develop_1 = require("./config/develop");
// Set app instance based on NODE_ENV
let appInstance;
switch (process.env.NODE_ENV) {
    case 'production':
        appInstance = new mainApp_1.MainApp(production_1.configProduction);
        break;
    default:
        appInstance = new mainApp_1.MainApp(develop_1.configDevelop);
}
/**
 * Instantiate App
 */
appInstance
    .start()
    .catch((err) => {
    logger_1.logger.error(`Error starting MainApp. Message: ${err}`);
    throw err;
});
