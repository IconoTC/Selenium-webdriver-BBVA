const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');


describe('login',  function () {
    this.timeout(10000);

    beforeEach(function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.get("https://www.saucedemo.com/");
    })

    afterEach(async function () {
        await driver.quit();
    })
  it("visit the login url and check that Username, Password inputs and Login button appears", async function() {
    this.timeout(15000);
        await driver.sleep(1000); // Espera implicita, no es necesaria y lo ideal es no usarlas
        const url = await driver.getCurrentUrl();
        assert(url.includes('saucedemo.com'), 'URL should include saucedemo.com'); //Comprobamos que la url contiene saucedemo.com
        // Espera explícita hasta que el elemento esté localizado y visible
        await driver.wait(until.elementLocated(By.id('user-name')), 5000); // Siempre es mejor practica usar esperas explícitas
        const userNameField = await driver.findElement(By.id('user-name'));
        assert(userNameField, 'Username field should be present');
        assert.equal(await driver.getTitle(), 'Swag Labs');
        const pageTitle = await driver.getTitle();
        assert.equal(pageTitle, 'Swag Labs');
        assert.notEqual(pageTitle, 'Swag gfsxhfmdLabs')
        const password = await driver.findElement(By.name('password'));
        const passwordByCss = await driver.findElement(By.css('[name="password"]'));
        assert(password, 'Password field should be present');
        assert(passwordByCss, 'Password field should be present');
        const divLog = await driver.findElement(By.className('submit-button'));
        assert.ok(divLog); 
     });

  it('should fail login when username and password are not provided', async function () {
    let pageText = await driver.findElement(By.css('body')).getText();
    assert(!pageText.includes('Epic sadface: Username is required'), `El texto "'username is required'" no se encontró en la página`);
    await driver.findElement(By.css('[data-test="login-button"]')).click();
    await driver.wait(until.elementLocated(By.css('[data-test="error-button"]')), 5000);
    // const errorButton = await driver.findElement(By.css('[data-test="error-button"]'));
    // assert.ok(errorButton);
     pageText= await driver.findElement(By.css('body')).getText();
    assert(pageText.includes('Epic sadface: Username is required'), `El texto "'username is required'" no se encontró en la página`);    
  });

  it('should fail login when password is not provided and appears an error message "Epic sadface: Password is required"', async function () {
    this.timeout(20000);
    let pageText = await driver.findElement(By.css('body')).getText();
    const getInputUsername = await driver.findElement(By.id('user-name')) //Guardamos en una constante el localizador de un elemento web (El input Username)
    let getInputValue = await getInputUsername.getAttribute('value') // Usamos getAttribute('value) para obtener el value de ese elemento web
    console.log('value:', getInputValue);
    assert(getInputValue.includes('')) //Verificamos que el value es una string vacía
    assert.strictEqual(getInputValue, '');

    getInputUsername.sendKeys('User'); // Obtener el texto visible del elemento
   // const inputUsername = await driver.findElement(By.css('[data-test="username"]'))

    getInputValue = await driver.findElement(By.id('user-name')).getAttribute('value')
    console.log('value:', getInputValue);
    assert(getInputValue.includes('User'))//Verificamos que el value contiene el texto 'User'
    assert.strictEqual(getInputValue, 'User');//Verificamos que el value es exactamente 'User'


    assert(!pageText.includes('Epic sadface: Username is required'), `El texto "'username is required'" se encontró en la página`);
    //Hacemos click
    await driver.findElement(By.css('[data-test="login-button"]')).click();
    //Comprobar que existe el elemento web del error
    const divLog = await driver.wait(until.elementLocated(By.css('[data-test="error-button"]')), 5000);
    pageText = await driver.findElement(By.css('body')).getText();
    await driver.sleep(5000);
    assert.ok(divLog); 
    assert(pageText.includes('Epic sadface: Password is required'), `El texto "'username is required'" no se encontró en la página`);

  });
});
