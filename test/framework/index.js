"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainApp_1 = require("../../src/mainApp");
const logger_1 = require("../../src/modules/logger");
const test_1 = require("../../src/config/test");
const index_1 = require("../../src/modules/ioc/index");
const serviceIdentifier_1 = require("../../src/modules/ioc/constant/serviceIdentifier");
const namedTestModule_1 = require("../../src/modules/ioc/constant/namedTestModule");
const appInstance = new mainApp_1.MainApp(test_1.configTest);
/**
 * Instantiate App
 */
appInstance
    .start()
    .then((app) => {
    const testHelper = index_1.default.getNamed(serviceIdentifier_1.IDENTIFIER.TEST_MODULE, namedTestModule_1.NAMED_TEST_MODULE.TEST_HELPER);
    const serverUrl = `http://${appInstance.host}:${appInstance.port}`;
    testHelper.createAxios(serverUrl);
    testHelper.setAppInstance(app);
    testHelper.setReady();
})
    .catch((err) => {
    logger_1.logger.error(`Error starting MainApp for Test Environment. Message: ${err}`);
    appInstance.close();
});
