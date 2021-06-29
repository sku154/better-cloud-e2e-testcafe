/* global el */
import { Selector, t} from 'testcafe';

export async function assertElementVisible(selector) {
  await t.expect(selector.visible).ok();
}

export async function clickElement(selector) {
  await t.click(selector);
}

export async function maximizeWindow() {
  await t.maximizeWindow();
}

export async function navigatePage(url) {
  await t.navigateTo(url);
}