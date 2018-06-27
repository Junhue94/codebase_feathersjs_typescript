"use strict";
/**
 * Main App Setup
 */
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require('body-parser');
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const helmet = require('helmet');
const services_1 = require("./services");
const logger_1 = require("./modules/logger");
/**
 * Main App Class
 */
class MainApp {
    constructor(config) {
        this.appInstance = this.createServerInstance();
        this.port = config.port;
        this.host = config.host;
        this.server = this.appInstance.listen(config.port);
    }
    /**
     * Create Server Instance
     */
    createServerInstance() {
        const app = feathers();
        // App Configurations
        app
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true,
            parameterLimit: 10000
        }))
            .use(helmet())
            .configure(rest())
            .configure(hooks())
            .configure(services_1.AllServices.exportServices);
        return app;
    }
    /**
     * Start Application
     */
    start() {
        const promise = new Promise((resolve) => {
            this.server.on('listening', () => {
                logger_1.logger.info(`Server started on http://${this.host}:${this.port}`);
                resolve(this.appInstance);
            });
        });
        return promise
            .then((app) => {
            return app;
        });
    }
    /**
     * Close Application
     */
    close() {
        if (this.server !== undefined) {
            this.server.close();
        }
    }
}
exports.MainApp = MainApp;
