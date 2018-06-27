"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../modules/ioc/index");
const serviceIdentifier_1 = require("../../modules/ioc/constant/serviceIdentifier");
const namedHook_1 = require("../../modules/ioc/constant/namedHook");
const namedLogic_1 = require("../../modules/ioc/constant/namedLogic");
const allServiceUri_1 = require("../allServiceUri");
/**
 * Service Contact Class
 */
class CmsServiceContact {
    constructor() {
        this.cmsContactLogic = index_1.default.getNamed(serviceIdentifier_1.IDENTIFIER.LOGIC, namedLogic_1.NAMED_LOGIC.CMS_CONTACT);
    }
    static setupApp() {
        const app = this;
        const uri = allServiceUri_1.CONTACT;
        const contactHook = index_1.default.getNamed(serviceIdentifier_1.IDENTIFIER.HOOK, namedHook_1.NAMED_HOOK.CMS_SERVICE_CONTACT);
        app.use(uri, new CmsServiceContact());
        app.service(uri).hooks(contactHook.exportHook());
    }
    create(data, params) {
        return this.cmsContactLogic.create(data, params);
    }
    get(id, params) {
        console.log(id);
        console.log(params);
    }
}
exports.CmsServiceContact = CmsServiceContact;
