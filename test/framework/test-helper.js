"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const axios_1 = require("axios");
const events = require('events');
const readyEventEmitter = new events.EventEmitter();
/**
 * Test Helper Class
 */
let TestHelper = class TestHelper {
    /**
     * Test Helper Class
     */
    constructor() {
        this.ready = false;
    }
    onReady(callback) {
        // if (this.ready) {
        //     return callback();
        // }
        //
        // readyEventEmitter.on('ready', () => {
        //     callback();
        // });
        //
        // return null;
        callback();
    }
    setReady() {
        this.ready = true;
        readyEventEmitter.emit('ready');
    }
    setAppInstance(app) {
        this.app = app;
    }
    createAxios(serverUrl) {
        this.axios = axios_1.default.create({
            baseURL: serverUrl,
            timeout: 3000
        });
    }
};
TestHelper = __decorate([
    inversify_1.injectable()
], TestHelper);
exports.TestHelper = TestHelper;
