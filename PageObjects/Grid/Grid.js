const commonpage =require('../commonpage');
const object= require('./GridObjects')


class Grid extends commonpage{
    constructor (driver){
        super(driver);
        this.driver=driver;
    }   

async clickOnGreenBox(){
    await this.driver.findElement(object.greenBoxLocator).click(); 
    return await this.driver.findElement(object.FrameDungeonLocator).getText();
}
}

module.exports=Grid;