const objects =require('./CookieHandlingObjects');
 
class CookieHandling{
    constructor (driver){
        this.driver=driver;
    }
 
    async perform()
    {
        await this.driver.findElement(objects.generateTokenLocator).click()
        var cookie = await this.driver.findElement(objects.tokenLocator).getText();
        var mainValue = await cookie.toString().split(':')
        var tokenValue  = await mainValue[1].trim().toString();
        await this.driver.manage().addCookie({name:'Token', value: tokenValue});
        await this.driver.findElement(objects.proceedLinkLocator).click();
        return await this.driver.getTitle();
    }
}
module.exports=CookieHandling;
