"use strict";
/**
 * Mock View Model Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const serviceIdentifier_1 = require("../../constant/serviceIdentifier");
const namedDocType_1 = require("../../constant/namedDocType");
const mockContactVm_1 = require("../../../../_mock/viewModel/mockContactVm");
exports.mockVmContainer = new inversify_1.ContainerModule((bind) => {
    bind(serviceIdentifier_1.IDENTIFIER.MOCK_VM).to(mockContactVm_1.ContactMockVm).whenTargetNamed(namedDocType_1.NAMED_DOCTYPE.CONTACTS);
});
