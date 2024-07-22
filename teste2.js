const{Builder, By} = require('selenium-webdriver');
    (async function firstScript() {
    try {
        let driver = await new Builder ().forBrowser('chrome').build();
        await driver.get('http://www.google.com/'); // abre o navegador
        await driver.getTitle(); //solicitar inf. do navegador
        await driver.manage().setTimeouts({implicit:1000}); // ajusta o timeout
        let searchBox = await driver.findElement(By.name('q'));
        await driver.searchBox.click();
        let searchButton = await driver.findElement(By.name('btnk'));
        await searchBox.sendKeys('Prefeitura de muriae');
        await searchButton.click();
        let searchPSeletivo = await driver.findElement(By.className='l');
        await searchPSeletivo.click();
        // let value = await searchBox.getAttribute("value");
        // await driver.quit();
    }   catch (erro){
            console.error(erro);
    }
})();