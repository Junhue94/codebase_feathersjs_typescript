/**
 * Application Instantiation
 */

import { MainApp } from './mainApp';
import { logger } from './modules/logger';
import { configProduction } from './config/production';
import { configDevelop } from './config/develop';

// Set app instance based on NODE_ENV
let appInstance: any;
switch (process.env.NODE_ENV) {
    case 'production':
        appInstance = new MainApp(configProduction);
        break;
    default:
        appInstance = new MainApp(configDevelop);
    }

/**
 * Instantiate App
 */
appInstance
    .start()
    .catch((err) => {
        logger.error(`Error starting MainApp. Message: ${err}`);
        throw err;
    });
