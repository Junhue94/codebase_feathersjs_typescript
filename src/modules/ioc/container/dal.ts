/**
 * Data Access Layer Container
 */

import { ContainerModule, interfaces } from 'inversify';
import { IDENTIFIER } from '../constant/serviceIdentifier';
import { NAMED_DAL } from '../constant/namedDal';
import { Dao } from '../../../dal/dao';

export const dalContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind(IDENTIFIER.DAL).to(Dao).whenTargetNamed(NAMED_DAL.DAO);
});