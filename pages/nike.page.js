import { Selector, ClientFunction, t } from "testcafe";
import {
  clickElement,
  assertElementVisible,
  hoverElement,
  assertElementContains,
  assertElementNotEquals,
  enterText,
  clickElementWithOption,
  wait,
  switchToFrame,
} from "../utils/custom";
import { shippingAddress } from "../data/input";
import Chance from "chance";
const chance = new Chance();
class NikePage {
  constructor() {
    this.linkSwoosh = Selector('[aria-label="Nike Home Page"]');
    this.lnkMens = Selector('[class="desktop-category"] > li').nth(1);
    this.lnkShoes = Selector("p").withExactText("Shoes");
    this.lnkProuct = Selector('[data-el-type="Hero"]').nth(0);
    this.size = Selector('[data-testid="pdp-grid-selector-item"]');
    this.btnAddtoBag = Selector('[aria-label="Add to Bag"]');
    this.btnCheckout = Selector('[data-testid="qa-cart-checkout"]');
    this.btnGuestCheckout = Selector('[data-attr="qa-guest-checkout"]');
    this.txtTotal = Selector('[data-attr="cart-total"]');
    this.txtEmail = Selector("#email");
    this.txtFirstName = Selector("#firstName");
    this.txtLastName = Selector("#lastName");
    this.btnAddressManually = Selector('[aria-label="Enter address manually"]');
    this.txtAddressOne = Selector('[name="address.address1"]');
    this.txtAddressTwo = Selector('[name="address.address2"]');
    this.txtCity = Selector("#city");
    this.txtPostalCode = Selector("#postalCode");
    this.txtPhoneNumber = Selector("#phoneNumber");
    this.selectState = Selector("#state");
    this.btnSave = Selector("button").withExactText("Save & Continue");
    this.btnContinuePayment = Selector('[data-attr="continuePaymentBtn"]');
    this.productItem = Selector('[data-attr="cloud-cart-item"]');
    this.frameId = Selector('[data-attr="credit-card-iframe"]');
    this.txtCardNumber = Selector("#creditCardNumber");
    this.txtExDate = Selector("#expirationDate");
    this.txtCvNumber = Selector("#cvNumber");
  }

  /**
   * @description Verify Nike Logo
   * @author Santhosh
   */
  async verifySwoosh() {
    await assertElementVisible(this.linkSwoosh);
  }

  /**
   * @description  Click Shoes link from Mens
   * @author Santhosh
   */
  async selectShoes() {
    await hoverElement(this.lnkMens);
    await assertElementVisible(this.lnkShoes);
    await clickElement(this.lnkShoes);
  }

  /**
   * @description Select Product
   * @author Santhosh
   */
  async selectProduct() {
    await assertElementVisible(this.lnkProuct);
    await clickElement(this.lnkProuct);
  }

  /**
   * @description  Select Size
   * @author Santhosh
   */
  async selectSize() {
    const count = await this.size.count;
    for (let i = 0; i < count; i++) {
      const isDisabled = await this.size.nth(i).hasClass("disabled");
      if (!isDisabled) {
        await clickElement(this.size.nth(i));
        break;
      }
    }
  }

  /**
   * @description Click Add-to-Bag
   * @author Santhosh
   */
  async clickAddtoBag() {
    await assertElementVisible(this.btnAddtoBag);
    await clickElement(this.btnAddtoBag);
  }

  /**
   * @description click checkout
   * @author Santhosh
   */
  async clickCheckout() {
    await assertElementVisible(this.btnCheckout);
    await clickElement(this.btnCheckout);
    const getLocation = ClientFunction(() => document.location.href.toString());
    const url = getLocation();
    await assertElementContains(url, "checkout");
  }

  /**
   * @description click Guest Checkout
   * @author Santhosh
   */
  async clickGuestCheckout() {
    await assertElementVisible(this.btnGuestCheckout);
    await clickElement(this.btnGuestCheckout);
  }

  /**
   * @description verify product
   * @author Santhosh
   */
  async verifyCartItem() {
    await assertElementVisible(this.productItem);
  }

  /**
   * @description Verify Total
   * @author Santhosh
   */
  async verifyTotal() {
    const total = await this.txtTotal.innerText;
    await assertElementNotEquals(total, "$0.00");
  }

  /**
   * @description Enter Delivery Address
   * @author Santhosh
   */
  async enterShippingAddress() {
    await clickElement(this.btnAddressManually);
    await enterText(this.txtEmail, shippingAddress.email);
    await enterText(this.txtFirstName, shippingAddress.firstName);
    await enterText(this.txtLastName, shippingAddress.lastName);
    await enterText(this.txtAddressOne, shippingAddress.address);
    await enterText(this.txtCity, shippingAddress.city);
    await clickElement(this.selectState);
    await clickElementWithOption(this.selectState, shippingAddress.state);
    await enterText(this.txtPostalCode, shippingAddress.zip);
    await enterText(this.txtPhoneNumber, shippingAddress.phone);
  }

  /**
   * @description Click Save Button
   * @author Santhosh
   */
  async clickSaveAndContinue() {
    await clickElement(this.btnSave);
  }

  /**
   * @description click continue payment
   * @author Santhosh
   */
  async clickContinuePayment() {
    await clickElement(this.btnContinuePayment);
  }

  /**
   * @description Enter Payment Details
   * @author Santhosh
   */
  async enterPaymentDetails() {
    await switchToFrame(this.frameId);
    await enterText(this.txtCardNumber, chance.cc());
    await enterText(this.txtExDate, "10/28");
    await enterText(this.txtCvNumber, "456");
  }
}
export default new NikePage();
