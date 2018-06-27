/**
 * Test Hook Class
 */

import { injectable } from 'inversify';

@injectable()
export class HookTest {
    beforeHook() {
        return (hook) => {
            console.log('before create hook test');
            // hook.result = 'end';
            return hook;
        };
    }

    afterCreate() {
        return (hook) => {
            console.log('after create hook test');
            // hook.result = 'end';
            return hook;
        };
    }
}