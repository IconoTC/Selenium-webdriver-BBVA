const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');


describe('login',  function () {
    this.timeout(3000);

  it("visit the login url", async function() {
    //this.timeout(10000);
    //this.timeout(6000);
      let driver = new Builder().forBrowser('chrome').build();
  
      try {
          await driver.get("https://www.saucedemo.com/"); //Visitamos la url
          await driver.sleep(1000); // Espera implicita
          const url = await driver.getCurrentUrl();
          assert(url.includes('saucedemo.com'), 'URL should include saucedemo.com'); //Comprobamos que la url contiene saucedemo.com
          // Espera explícita hasta que el elemento esté localizado y visible
          await driver.wait(until.elementLocated(By.id('user-name')), 5000);
          const userNameField = await driver.findElement(By.id('user-name'));
          assert(userNameField, 'Username field should be present');
          assert.equal(await driver.getTitle(), 'Swag Labs');
          const pageTitle = await driver.getTitle();
          assert.equal(pageTitle, 'Swag Labs');
          assert.notEqual(pageTitle, 'Swag gfsxhfmdLabs')
      } finally {
          await driver.quit();
      }
  });
});
