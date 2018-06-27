"use strict";
/**
 * Service Contact Hook
 */
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
const serviceIdentifier_1 = require("../../modules/ioc/constant/serviceIdentifier");
const namedDocType_1 = require("../../modules/ioc/constant/namedDocType");
let ServiceContactHook = class ServiceContactHook {
    exportHook() {
        return {
            before: {
                create: [
                // this.mockViewModel.mockDoc()
                ]
            }
        };
    }
};
__decorate([
    inversify_1.inject(serviceIdentifier_1.IDENTIFIER.MOCK_VM), inversify_1.named(namedDocType_1.NAMED_DOCTYPE.CONTACTS),
    __metadata("design:type", Object)
], ServiceContactHook.prototype, "mockViewModel", void 0);
ServiceContactHook = __decorate([
    inversify_1.injectable()
], ServiceContactHook);
exports.ServiceContactHook = ServiceContactHook;
