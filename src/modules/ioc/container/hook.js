"use strict";
/**
 * Hook Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../constant/serviceIdentifier");
const namedHook_1 = require("../constant/namedHook");
const hookTest_1 = require("../../../hook/hookTest");
const hooks_1 = require("../../../services/auth/hooks");
const hooks_2 = require("../../../services/contact/hooks");
exports.hookContainer = new inversify_1.ContainerModule((bind) => {
    bind(serviceIdentifier_1.IDENTIFIER.HOOK).to(hookTest_1.HookTest).whenTargetNamed(namedHook_1.NAMED_HOOK.TEST);
    bind(serviceIdentifier_1.IDENTIFIER.HOOK).to(hooks_1.ServiceAuthHook).whenTargetNamed(namedHook_1.NAMED_HOOK.SERVICE_AUTH);
    bind(serviceIdentifier_1.IDENTIFIER.HOOK).to(hooks_2.ServiceContactHook).whenTargetNamed(namedHook_1.NAMED_HOOK.CMS_SERVICE_CONTACT);
});
