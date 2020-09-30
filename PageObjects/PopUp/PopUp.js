const objects =require('./PopUpObjects');
 
class PopUp {
    constructor (driver){
        this.driver=driver;
    }
 
    async Task(){
        let handle= this.driver.getWindowHandle();
        await this.driver.findElement(objects.popupLocator).click();
        let handles = await this.driver.getAllWindowHandles();
        this.driver.sleep(1000)
        await this.driver.switchTo().window(handles[handles.length - 1]);
        this.driver.sleep(1000);
        let webelement=await this.driver.findElement(objects.textboxLocator)
        webelement.sendKeys('Avinash');
        this.driver.sleep(1000);
        await this.driver.findElement(objects.submitButtonLocator).click();
        this.driver.sleep(1000);
        await this.driver.switchTo().window(handle);
        await this.driver.findElement(objects.proceedLinkLocator).click();
        return await this.driver.findElement(objects.next_page_text).getText();
 
    }
}
 
module.exports=PopUp;
         	

