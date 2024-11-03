/* global el */
import { Selector, t } from "testcafe";

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

export async function hoverElement(selector) {
  await t.hover(selector);
}

export async function assertElementContains(selector, selectorTxt) {
  await t.expect(selector).contains(selectorTxt);
}

export async function assertElementNotEquals(actual, expected) {
  await t.expect(actual).notEql(expected);
}

export async function enterText(selector, selectorTxt) {
  await t.typeText(selector, selectorTxt);
}

export async function clickElementWithOption(selector, text) {
  await t.click(selector.find("option").withExactText(text));
}

export async function wait(timeout) {
  await t.wait(timeout);
}

export async function switchToFrame(selector) {
  await t.switchToIframe(selector);
}
