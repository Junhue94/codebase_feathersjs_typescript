"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../modules/ioc/constant/serviceIdentifier");
const namedDal_1 = require("../modules/ioc/constant/namedDal");
const contactEM_1 = require("../dal/entityModel/contactEM");
/**
 * CMS Logic Contact Class
 */
let CmsLogicContact = class CmsLogicContact {
    create(data) {
        // Create new Model object
        const contactModel = new contactEM_1.contactEM(data.docs);
        return this.dao.saveOne(data.clinicCode, contactModel);
    }
};
__decorate([
    inversify_1.inject(serviceIdentifier_1.IDENTIFIER.DAL), inversify_1.named(namedDal_1.NAMED_DAL.DAO),
    __metadata("design:type", Object)
], CmsLogicContact.prototype, "dao", void 0);
CmsLogicContact = __decorate([
    inversify_1.injectable()
], CmsLogicContact);
exports.CmsLogicContact = CmsLogicContact;
