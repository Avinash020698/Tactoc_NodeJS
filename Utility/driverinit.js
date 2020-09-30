const selenium= require('selenium-webdriver')

 var initiatedriver= function (browser){
    switch(browser){
        case 'chrome':
            return new selenium.Builder().forBrowser('chrome').build();
          
        case 'firefox':
            return new selenium.Builder().forBrowser('firefox').build();

        default:
            break;
    }

}

module.exports= initiatedriver;