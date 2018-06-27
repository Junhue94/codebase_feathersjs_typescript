"use strict";
/**
 * Data Access Layer Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../constant/serviceIdentifier");
const namedDal_1 = require("../constant/namedDal");
const dao_1 = require("../../../dal/dao");
exports.dalContainer = new inversify_1.ContainerModule((bind) => {
    bind(serviceIdentifier_1.IDENTIFIER.DAL).to(dao_1.Dao).whenTargetNamed(namedDal_1.NAMED_DAL.DAO);
});
