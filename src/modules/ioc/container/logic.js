"use strict";
/**
 * Logic Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../constant/serviceIdentifier");
const namedLogic_1 = require("../constant/namedLogic");
const logicContact_1 = require("../../../business/logicContact");
exports.logicContainer = new inversify_1.ContainerModule((bind) => {
    bind(serviceIdentifier_1.IDENTIFIER.LOGIC).to(logicContact_1.CmsLogicContact).whenTargetNamed(namedLogic_1.NAMED_LOGIC.CMS_CONTACT);
});
