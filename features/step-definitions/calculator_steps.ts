const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const { expectType } = require('ts-expect');

Given('Launch the url', async () => {
  await browser.url("http://juliemr.github.io/protractor-demo/");
});

When('Enter numbers in {string}, {string}', async (firstInput, secondInput) => {
  const firstField = await $('//input[contains(@ng-model, "first")]');
  firstField.setValue(firstInput);
  const secondField = await $('//input[contains(@ng-model, "second")]');
  secondField.setValue(secondInput);
});

When('Select the {string}', async (operator) => {
  const operatorField = await $(`//select/option[contains(@value, '${operator}')]`);
  operatorField.click();
});

When('Click the Go! button', async () => {
  const  button = await $('#gobutton').click();
});

Then('Expect {string}', async (expectedResult) => {
  const actualResult = await $(`//td[contains(text(), '${expectedResult}')]`).getText();
  await expect(actualResult).toHaveValue(expectedResult);
  });
