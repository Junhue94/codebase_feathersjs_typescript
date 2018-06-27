/**
 * Main IOC Container
 */

import 'reflect-metadata';
import { Container } from 'inversify';
import { dalContainer } from './container/dal';
import { hookContainer } from './container/hook';
import { logicContainer } from './container/logic';
import { mockVmContainer } from './container/_mock/mockVm';
import { testModuleContainer } from './container/test';

let mainContainer = new Container();

// Load All Containers
mainContainer.load(mockVmContainer);
mainContainer.load(testModuleContainer);
mainContainer.load(hookContainer);
mainContainer.load(logicContainer);
mainContainer.load(dalContainer);

export default mainContainer;