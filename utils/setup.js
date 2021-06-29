import {getBaseUrl, browserSetup} from './helper';
export const fixture = (fixtureName, deviceType) => global.fixture(fixtureName, deviceType)`${fixtureName}`.page`${getBaseUrl()}`
.beforeEach(async (t) => {
    await browserSetup(`${getBaseUrl()}`, deviceType);
  })