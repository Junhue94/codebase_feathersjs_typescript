"use strict";
/**
 * Service Auth Class
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../modules/ioc/index");
const serviceIdentifier_1 = require("../../modules/ioc/constant/serviceIdentifier");
const namedHook_1 = require("../../modules/ioc/constant/namedHook");
const allServiceUri_1 = require("../allServiceUri");
class ServiceAuth {
    static setupApp() {
        const app = this;
        const uri = allServiceUri_1.AUTH;
        const authHook = index_1.default.getNamed(serviceIdentifier_1.IDENTIFIER.HOOK, namedHook_1.NAMED_HOOK.SERVICE_AUTH);
        app.use(uri, new ServiceAuth());
        app.service(uri).hooks(authHook.exportHook());
    }
    create() {
    }
}
exports.ServiceAuth = ServiceAuth;
