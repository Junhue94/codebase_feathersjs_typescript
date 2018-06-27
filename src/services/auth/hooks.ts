/**
 * Service Auth Hook
 */

import { injectable } from 'inversify';

@injectable()
export class ServiceAuthHook {

    exportHook() {
        return {
            before: {
                all: [

                ],
                create: [

                ]
            },
            after: {
                create: [

                ]
            }
        };
    }
}
