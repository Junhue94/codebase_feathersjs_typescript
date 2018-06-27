"use strict";
/**
 * Main IOC Container
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const dal_1 = require("./container/dal");
const hook_1 = require("./container/hook");
const logic_1 = require("./container/logic");
const mockVm_1 = require("./container/_mock/mockVm");
const test_1 = require("./container/test");
let mainContainer = new inversify_1.Container();
// Load All Containers
mainContainer.load(mockVm_1.mockVmContainer);
mainContainer.load(test_1.testModuleContainer);
mainContainer.load(hook_1.hookContainer);
mainContainer.load(logic_1.logicContainer);
mainContainer.load(dal_1.dalContainer);
exports.default = mainContainer;
