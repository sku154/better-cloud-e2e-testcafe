import nike from "../../../pages/nike.page";
import { fixture } from "../../../utils/setup";

fixture("Nike E2e Flow", "desktop");
test.meta({
  testType: "desktop-smoke",
  testCase: "nike-e2e",
})("ui/desktop/nike.test", async (t) => {
  // 1.Verify Nike Logo
  await nike.verifySwoosh();
  // 2. Clink Shoes from Mens Navigation Links
  await nike.selectShoes();
  // 3. select product
  await nike.selectProduct();
  // 4. select size
  await nike.selectSize();
  // 5. Click Add-To-Bag
  await nike.clickAddtoBag();
  // 6. click checkout
  await nike.clickCheckout();
  // 7. click Guest Checkout
  await nike.clickGuestCheckout();
  // 8. Verify Product
  await nike.verifyCartItem();
  // 9. verify total
  await nike.verifyTotal();
  // 10. Enter Shipping Address
  await nike.enterShippingAddress();
  // 11. Click Save Button
  await nike.clickSaveAndContinue();
  await t.wait(1000);
  // 12. verify product
  await nike.verifyCartItem();
  // 13. verify Total
  await nike.verifyTotal();
  // 14. click continue payment
  await nike.clickContinuePayment();
  // 15. verify product
  await nike.verifyCartItem();
  // 16. verify total
  await nike.verifyTotal();
  // 17. Enter Payment Details
  await nike.enterPaymentDetails();
});
