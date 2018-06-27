"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const inversify_1 = require("inversify");
/**
 * Mock Contact View Model
 */
let ContactMockVm = class ContactMockVm {
    /**
     * Mock data from client
     */
    mockDoc() {
        return (hook) => {
            hook.data = {
                docs: {
                    company_name: 'Lim and Tan Family Clinic',
                    person_name: 'Ms Siew Ling Ling',
                    category: 'Staff',
                    handphone: '90892020',
                    telephone: '67324932',
                    fax: '67493993',
                    email: 'lingling@ltfc.com',
                    address: '#10-90 Mount Elizabeth Specialist Center',
                    notes: 'Please follow up',
                    url: 'contact.com',
                    change_log: [
                        {
                            user: 'doctor',
                            timestamp: parseInt(moment().format('x'), 10)
                        },
                        {
                            user: 'nurse',
                            timestamp: parseInt(moment().format('x'), 10)
                        }
                    ]
                },
                clinicCode: 'dev_junhue'
            };
        };
    }
};
ContactMockVm = __decorate([
    inversify_1.injectable()
], ContactMockVm);
exports.ContactMockVm = ContactMockVm;
