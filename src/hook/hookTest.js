"use strict";
/**
 * Test Hook Class
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let HookTest = class HookTest {
    beforeHook() {
        return (hook) => {
            console.log('before create hook test');
            // hook.result = 'end';
            return hook;
        };
    }
    afterCreate() {
        return (hook) => {
            console.log('after create hook test');
            // hook.result = 'end';
            return hook;
        };
    }
};
HookTest = __decorate([
    inversify_1.injectable()
], HookTest);
exports.HookTest = HookTest;
