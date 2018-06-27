///<reference path="../../node_modules/@types/mongoose/index.d.ts"/>

import { injectable } from 'inversify';
import * as errors from 'feathers-errors';
import { logger } from '../modules/logger';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { configDevelop } from '../config/develop';

mongoose.Promise = bluebird;

/**
 * DAL Base
 */
@injectable()
export class Dao {

    private connectionStr(clinicCode) {
        return `mongodb://` +
        `${configDevelop.DB_USER}:` +
        `${configDevelop.DB_PASSWORD}@` +
        `${configDevelop.DB_HOST}/` +
        `${configDevelop.DB_NAME_PREFIX}${clinicCode}?` +
        `${configDevelop.DB_PERMISSION}`;
    }

    public saveOne(clinicCode, dataModel: any) {
        // Initialize mongodb connection
        const db = mongoose.connect(this.connectionStr(clinicCode), {
            useMongoClient: true
        });

        // Save data to database
        return db
            .then(() => {
                return dataModel.save();
            })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                logger.error(err.errors);
                return new errors.BadRequest('Request failed');
            });
    }
}