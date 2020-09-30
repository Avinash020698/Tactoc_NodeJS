const objects =require('./DragAndDropObjects');
 
class DragAndDrop {
    constructor (driver){
        this.driver=driver;
    }



    
 
    async performTask()
    {
        // let action= new Actions(driver);
        await this.driver.actions().dragAndDrop(this.driver.findElement(objects.container),this.driver.findElement(objects.draggableItem)).perform();
        await  this.driver.sleep(2000);
        await this.driver.findElement(objects.proceedLocator).click();
        return await this.driver.findElement(objects.popup_check).getText();
    }
}
module.exports=DragAndDrop;
