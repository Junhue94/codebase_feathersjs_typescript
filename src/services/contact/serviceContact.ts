
import mainContainer from '../../modules/ioc/index';
import { IDENTIFIER } from '../../modules/ioc/constant/serviceIdentifier';
import { NAMED_HOOK } from '../../modules/ioc/constant/namedHook';
import { NAMED_LOGIC } from '../../modules/ioc/constant/namedLogic';
import { CONTACT } from '../allServiceUri';

/**
 * Service Contact Class
 */
export class CmsServiceContact {
    cmsContactLogic: any = mainContainer.getNamed(IDENTIFIER.LOGIC, NAMED_LOGIC.CMS_CONTACT);

    static setupApp() {
        const app: any = this;
        const uri: string = CONTACT;
        const contactHook: any = mainContainer.getNamed(IDENTIFIER.HOOK, NAMED_HOOK.CMS_SERVICE_CONTACT);

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
