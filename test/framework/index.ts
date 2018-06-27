
import { MainApp } from '../../src/mainApp';
import { logger } from '../../src/modules/logger';
import { configTest } from '../../src/config/test';
import mainContainer from '../../src/modules/ioc/index';
import { IDENTIFIER } from '../../src/modules/ioc/constant/serviceIdentifier';
import { NAMED_TEST_MODULE } from '../../src/modules/ioc/constant/namedTestModule';

const appInstance = new MainApp(configTest);

/**
 * Instantiate App
 */
appInstance
    .start()
    .then((app) => {
        const testHelper: any = mainContainer.getNamed(IDENTIFIER.TEST_MODULE, NAMED_TEST_MODULE.TEST_HELPER);
        const serverUrl = `http://${appInstance.host}:${appInstance.port}`;
        testHelper.createAxios(serverUrl);
        testHelper.setAppInstance(app);
        testHelper.setReady();
    })
    .catch((err) => {
        logger.error(`Error starting MainApp for Test Environment. Message: ${err}`);
        appInstance.close();
    });