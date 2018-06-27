
/**
 * Register All Services
 */

import { CmsServiceContact } from './contact/serviceContact';

export class AllServices {
    static exportServices() {
        const app: any = this;

        app
            .configure(CmsServiceContact.setupApp);
    }
}
