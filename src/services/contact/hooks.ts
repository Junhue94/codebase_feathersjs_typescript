/**
 * Service Contact Hook
 */

import { injectable, inject, named } from 'inversify';
import { IDENTIFIER } from '../../modules/ioc/constant/serviceIdentifier';
import { NAMED_DOCTYPE } from '../../modules/ioc/constant/namedDocType';

@injectable()
export class ServiceContactHook {
    @inject(IDENTIFIER.MOCK_VM) @named(NAMED_DOCTYPE.CONTACTS) mockViewModel;

    exportHook() {
        return {
            before: {
                create: [
                    // this.mockViewModel.mockDoc()
                ]
            }
        };
    }
}
