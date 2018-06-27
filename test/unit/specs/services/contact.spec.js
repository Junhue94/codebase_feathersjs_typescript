"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const allServiceUri_1 = require("../../../../src/services/allServiceUri");
const namedTestModule_1 = require("../../../../src/modules/ioc/constant/namedTestModule");
const serviceIdentifier_1 = require("../../../../src/modules/ioc/constant/serviceIdentifier");
const test_1 = require("../../../../src/config/test");
const contact_1 = require("../../_mock/services/contact");
const index_1 = require("../../../../src/modules/ioc/index");
const testHelper = index_1.default.getNamed(serviceIdentifier_1.IDENTIFIER.TEST_MODULE, namedTestModule_1.NAMED_TEST_MODULE.TEST_HELPER);
const uri = `/${allServiceUri_1.CONTACT}`;
// @TODO Throw Error shown on terminal
// @TODO Watch not functioning properly after code changes
describe(uri, () => {
    let clinicCode = test_1.configTest.CLINIC_CODE;
    beforeEach((done) => {
        testHelper.onReady(() => {
            done();
        });
    });
    describe('Create document', () => {
        it('should create new document successfully', () => {
            return testHelper.axios
                .post(uri, {
                clinicCode,
                docs: contact_1.ServiceContactMockData.post
            })
                .then((res) => {
                chai_1.assert.property(res.data, '_id');
            });
        });
        it('should throw error when create with missing required field', () => {
            return testHelper.axios
                .post(uri, {
                clinicCode,
                docs: contact_1.ServiceContactMockData.missingReqField
            })
                .then((res) => {
                chai_1.assert.equal(res.data.code, 400);
            });
        });
    });
});
