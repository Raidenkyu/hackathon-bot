/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function (controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'test', ['message'], async (bot, message) => {
        await bot.reply(message, 'tested');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message', 'direct_message'], async function (bot, message) {
        await bot.reply(message, { text: 'I heard a number using a regular expression.' });
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/\bfrancesinha\b/), ['message', 'direct_message'], async function (bot, message) {
        await bot.reply(message, { text: 'Try "Santa Francesinha". It is open right now and 100 meters away from you' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message', 'direct_message'], async function (bot, message) {
        await bot.reply(message, { text: 'I HEARD ALL CAPS!' });
    });

}