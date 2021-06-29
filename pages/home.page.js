import { Selector } from 'testcafe';
import {clickElement, assertElementVisible} from '../utils/custom';

class HomePage {
    constructor() {
        this.linkCompany = Selector('a').withText('Company');
        this.txtBetterCloud = Selector('div.header > h1').withText('About BetterCloud');
        this.linkBoard = Selector('[class="tab__text"]').withText('Board');
        this.lnkBoardMemebers = Selector('div.board-members > div');
        this.txtBoardMembersName = Selector('div.board-members > div [class="profile__name"]');
        this.txtBoardMembersTitile = Selector('div.board-members > div [class="profile__title"]');

    }

    /**
   * @description Click on Company Link
   * @author Santhosh
   */
  async clickCompanyLink() {
    await assertElementVisible(this.linkCompany);
    await clickElement(this.linkCompany);
  }

  /**
   * @description  Verify About Better Cloud
   * @author Santhosh
   */
   async verifyAboutBetterCloud() {
    await assertElementVisible(this.txtBetterCloud);
  }

  /**
   * @description  get Board members Data
   * @author Santhosh
   */
   async getBoardMemeberData() {
    await clickElement(this.linkBoard);
    await assertElementVisible(this.txtBoardMembersName);
    const count = await this.txtBoardMembersName.count;
    let arr2=[];
    for (let i = 0; i < count; i++) {
      let arr=[];
      for(let j=1; j<=1; j++){
       const names = await this.txtBoardMembersName.nth(i).textContent;
       const title = await this.txtBoardMembersTitile.nth(i).textContent;
       var obj = {name: names, title: title}
    }
    arr2.push(obj);
    }
    console.log(arr2);
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'export.csv',
    header: ['name', 'title']
  });
    const records = (arr2);
  csvWriter.writeRecords(records)
   }
}
export default new HomePage();