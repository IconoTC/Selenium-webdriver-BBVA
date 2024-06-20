
//Principales formas de acceder a los elementos con driver.findElement
driver.findElement(By.id('id')); //Busca un elemento por su atributo id.
driver.findElement(By.name('name'))// Busca un elemento por su atributo name.
driver.findElement(By.className('className'));// Busca un elemento por su atributo class.
driver.findElement(By.linkText('exact link text'));// Busca un enlace (<a>) por su texto exacto.
driver.findElement(By.partialLinkText('partial link text'));// Busca un enlace (<a>) por un texto visible parcial.
driver.findElement(By.css('css selector'));// Busca un elemento por un selector CSS.
driver.findElement(By.xpath('xpath expression'));// Busca un elemento utilizando XPath.

//Principales métodos encadenables después de driver.findElement
driver.findElement(By.id('elementId')).click();  //Hacer clic en el elemento
driver.findElement(By.id('elementId')).sendKeys('texto'); // Introducir texto en un campo de entrada
driver.findElement(By.id('elementId')).clear(); // Limpiar el contenido de un campo de entrada
driver.findElement(By.id('elementId')).getAttribute('attributeName'); // Obtener el valor de un atributo específico
driver.findElement(By.id('elementId')).getAttribute('value'); // Obtener el valor del atributo 'value'
driver.findElement(By.id('elementId')).getText(); // Obtener el texto visible del elemento
driver.findElement(By.id('elementId')).isEnabled(); // Verificar si el elemento está habilitado
driver.findElement(By.id('elementId')).isSelected(); // Verificar si el elemento está seleccionado (para elementos como checkboxes y radios)
driver.findElement(By.id('elementId')).isDisplayed(); // Verificar si el elemento está visible en la página
driver.findElement(By.id('namedColor')).getCssValue('background-color');

//Principales formas de hacer acciones sobre los elementos con Selenium-webdriver
driver.findElement(By.id('elementId')).click(); // Hacer clic en el elemento
driver.findElement(By.id('elementId')).sendKeys('texto'); //Introducir texto en un campo de entrada
driver.findElement(By.id('elementId')).clear();  //Limpiar el contenido de un campo de entrada
driver.findElement(By.id('elementId')).getAttribute('attributeName'); //Obtener el valor de un atributo específico
driver.findElement(By.id('elementId')).getAttribute('value'); // Obtener el valor del atributo 'value'
driver.findElement(By.id('elementId')).getText(); // Obtener el texto visible del elemento
driver.findElement(By.id('elementId')).isEnabled(); // Verificar si el elemento está habilitado
driver.findElement(By.id('elementId')).isSelected(); // Verificar si el elemento está seleccionado (para elementos como checkboxes y radios)
driver.findElement(By.id('elementId')).isDisplayed(); // Verificar si el elemento está visible en la página
driver.findElement(By.id('elementId')).submit(); // Enviar un formulario si el elemento es un botón de envío