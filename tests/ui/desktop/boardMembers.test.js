import homePage from '../../../pages/home.page';
import { fixture } from '../../../utils/setup';

/* eslint-disable max-len */
fixture('Desktop - US - Guest Checkout with apofo single inline creditcard', 'desktop')
  .meta({ author: 'Santhosh' })
  .meta({ fixtureType: 'desktop-smoke' });
test.meta({ testType: 'desktop-smoke', testCase: 'better-cloud-boardMemebers-data' })(
  'ui/desktop/boardMembers.test.js',
  async () => { 
     // 1. Click on Company Link from Menu
     await homePage.clickCompanyLink();
     // 2. Verify Better Cloud Text
     await homePage.verifyAboutBetterCloud();
     //3. Get Board members data
     await homePage.getBoardMemeberData();

   },
  );