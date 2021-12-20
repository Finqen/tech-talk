/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');

step("Open Google", async function () {
    await goto('https://google.com');
});

step("Search for <website>", async function (website) {
    try {
        await click('Ich stimme zu');
    } catch (error) {
        
    }
    await write(website, into(textBox()));
    await click('Google Suche');
});

step("Website address <url> is listed on page 1", async function (url) {
    assert(await text(url).exists());
});