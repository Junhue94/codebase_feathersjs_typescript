/**
 * Main App Setup
 */

const bodyParser = require('body-parser');
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const helmet = require('helmet');
import { AllServices } from './services';
import { logger } from './modules/logger';

/**
 * Main App Class
 */
export class MainApp {
    private appInstance: any;
    public port: number;
    public host: string;
    private server: any;

    constructor(config: any) {
        this.appInstance = this.createServerInstance();
        this.port = config.port;
        this.host = config.host;
        this.server = this.appInstance.listen(config.port);
    }

    /**
     * Create Server Instance
     */
    private createServerInstance() {
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
            .configure(AllServices.exportServices);

        return app;
    }

    /**
     * Start Application
     */
    public start() {
        const promise: any = new Promise((resolve) => {
            this.server.on('listening', () => {
                logger.info(`Server started on http://${this.host}:${this.port}`);
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
    public close() {
        if (this.server !== undefined) {
            this.server.close();
        }
    }
}