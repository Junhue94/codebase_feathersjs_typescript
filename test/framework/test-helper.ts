
import { injectable } from 'inversify';
import axios from 'axios';
const events = require('events');
const readyEventEmitter = new events.EventEmitter();

/**
 * Test Helper Class
 */
@injectable()
export class TestHelper {
    private ready: boolean = false;
    public axios: any;
    public app: any;

    public onReady(callback) {
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

    public setReady() {
        this.ready = true;
        readyEventEmitter.emit('ready');
    }

    public setAppInstance(app) {
        this.app = app;
    }

    public createAxios(serverUrl: string) {
        this.axios = axios.create({
            baseURL: serverUrl,
            timeout: 3000
        });
    }
}