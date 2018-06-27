"use strict";
/**
 * Test Environment Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../constant/serviceIdentifier");
const namedTestModule_1 = require("../constant/namedTestModule");
const test_helper_1 = require("../../../../test/framework/test-helper");
exports.testModuleContainer = new inversify_1.ContainerModule((bind) => {
    bind(serviceIdentifier_1.IDENTIFIER.TEST_MODULE).to(test_helper_1.TestHelper).inSingletonScope().whenTargetNamed(namedTestModule_1.NAMED_TEST_MODULE.TEST_HELPER);
});
