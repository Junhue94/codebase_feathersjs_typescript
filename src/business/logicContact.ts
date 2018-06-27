
import { injectable, inject, named } from 'inversify';
import { IDENTIFIER } from '../modules/ioc/constant/serviceIdentifier';
import { NAMED_DAL } from '../modules/ioc/constant/namedDal';
import { contactEM } from '../dal/entityModel/contactEM';

/**
 * CMS Logic Contact Class
 */
@injectable()
export class CmsLogicContact {
    @inject(IDENTIFIER.DAL) @named(NAMED_DAL.DAO) dao;

    public create(data) {
        // Create new Model object
        const contactModel = new contactEM(data.docs);
        return this.dao.saveOne(data.clinicCode, contactModel);
    }
}