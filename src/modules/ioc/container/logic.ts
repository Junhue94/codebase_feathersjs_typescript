/**
 * Logic Container
 */

import { ContainerModule, interfaces } from 'inversify';
import { IDENTIFIER } from '../constant/serviceIdentifier';
import { NAMED_LOGIC } from '../constant/namedLogic';
import { CmsLogicContact } from '../../../business/logicContact';

export const logicContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind(IDENTIFIER.LOGIC).to(CmsLogicContact).whenTargetNamed(NAMED_LOGIC.CMS_CONTACT);
});