/**
 * Hook Container
 */

import { ContainerModule, interfaces } from 'inversify';
import { IDENTIFIER } from '../constant/serviceIdentifier';
import { NAMED_HOOK } from '../constant/namedHook';
import { HookTest } from '../../../hook/hookTest';
import { ServiceAuthHook } from '../../../services/auth/hooks';
import { ServiceContactHook } from '../../../services/contact/hooks';

export const hookContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind(IDENTIFIER.HOOK).to(HookTest).whenTargetNamed(NAMED_HOOK.TEST);
    bind(IDENTIFIER.HOOK).to(ServiceAuthHook).whenTargetNamed(NAMED_HOOK.SERVICE_AUTH);
    bind(IDENTIFIER.HOOK).to(ServiceContactHook).whenTargetNamed(NAMED_HOOK.CMS_SERVICE_CONTACT);
});