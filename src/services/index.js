"use strict";
/**
 * Register All Services
 */
Object.defineProperty(exports, "__esModule", { value: true });
const serviceContact_1 = require("./contact/serviceContact");
class AllServices {
    static exportServices() {
        const app = this;
        app
            .configure(serviceContact_1.CmsServiceContact.setupApp);
    }
}
exports.AllServices = AllServices;
