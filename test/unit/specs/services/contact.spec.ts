
import 'mocha';
import { assert } from 'chai';
import { CONTACT } from '../../../../src/services/allServiceUri';
import { NAMED_TEST_MODULE } from '../../../../src/modules/ioc/constant/namedTestModule';
import { IDENTIFIER } from '../../../../src/modules/ioc/constant/serviceIdentifier';
import { configTest } from '../../../../src/config/test';
import { ServiceContactMockData } from '../../_mock/services/contact';
import mainContainer from '../../../../src/modules/ioc/index';

const testHelper: any = mainContainer.getNamed(IDENTIFIER.TEST_MODULE, NAMED_TEST_MODULE.TEST_HELPER);
const uri = `/${CONTACT}`;

// @TODO Throw Error shown on terminal

describe(uri, () => {
    let clinicCode = configTest.CLINIC_CODE;

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
                    docs: ServiceContactMockData.post
                })
                .then((res) => {
                    assert.property(res.data, '_id');
                });
        });

        it('should throw error when create with missing required field', () => {
            return testHelper.axios
                .post(uri, {
                    clinicCode,
                    docs: ServiceContactMockData.missingReqField
                })
                .then((res) => {
                    assert.equal(res.data.code, 400);
                });
        });
    });
});