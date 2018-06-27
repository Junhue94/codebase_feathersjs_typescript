/**
 * Service Auth Class
 */

import mainContainer from '../../modules/ioc/index';
import { IDENTIFIER } from '../../modules/ioc/constant/serviceIdentifier';
import { NAMED_HOOK } from '../../modules/ioc/constant/namedHook';
import { AUTH } from '../allServiceUri';

export class ServiceAuth {

    static setupApp() {
        const app: any = this;
        const uri: string = AUTH;
        const authHook: any = mainContainer.getNamed(IDENTIFIER.HOOK, NAMED_HOOK.SERVICE_AUTH);

        app.use(uri, new ServiceAuth());
        app.service(uri).hooks(authHook.exportHook());
    }

    create() {

    }
}
