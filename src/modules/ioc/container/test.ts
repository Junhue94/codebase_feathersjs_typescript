/**
 * Test Environment Container
 */

import { ContainerModule, interfaces } from 'inversify';
import { IDENTIFIER } from '../constant/serviceIdentifier';
import { NAMED_TEST_MODULE } from '../constant/namedTestModule';
import { TestHelper } from '../../../../test/framework/test-helper';

export const testModuleContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind(IDENTIFIER.TEST_MODULE).to(TestHelper).inSingletonScope().whenTargetNamed(NAMED_TEST_MODULE.TEST_HELPER);
});