const commonpage =require('../commonpage');
const objects = require('./HomepageObjects');
 
class HomePage extends commonpage{
    constructor (driver){
        super(driver);
        this.driver=driver;
    }
 
async BasicCourseLaunch(){
         await this.driver.findElement(objects.basicCourseLocator).click()
         return await this.driver.findElement(objects.GridGateLocator).getText();
    }
}
 
module.exports=HomePage;