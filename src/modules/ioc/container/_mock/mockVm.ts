/**
 * Mock View Model Container
 */

import { ContainerModule, interfaces } from 'inversify';
import { IDENTIFIER } from '../../constant/serviceIdentifier';
import { NAMED_DOCTYPE } from '../../constant/namedDocType';
import { ContactMockVm } from '../../../../_mock/viewModel/mockContactVm';

export const mockVmContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind(IDENTIFIER.MOCK_VM).to(ContactMockVm).whenTargetNamed(NAMED_DOCTYPE.CONTACTS);
});