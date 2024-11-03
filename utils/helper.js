import urlBuilder from "../data/urlBuilder";
import { navigatePage, maximizeWindow } from "./custom";
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const env = args.env === undefined ? "test" : args.env;

/**
 * @author Santhosh
 * @param url
 * @param deviceType
 */
export async function browserSetup(url, deviceType) {
  if (deviceType === "desktop") {
    await maximizeWindow();
  }
  if (deviceType === "mobile") {
    await t.resizeWindow(420, 668);
  }
  await navigatePage(url);
}
export function getBaseUrl() {
  process.env.TEST_ENV = env;
  let baseUrl = "";
  if (env === "prod") {
    baseUrl = urlBuilder.NIKE_URL;
  }
  return baseUrl;
}
