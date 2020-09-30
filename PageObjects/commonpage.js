const getdriver= require ('../utility/driverinit.js')


class commonpage{
    constructor(driver) {
        this.driver = driver;
    }
 
    async navigate(url) {
        
            await this.driver.get(url);
        
    }

    async getTextofanelement(ele)
    {
       let getvalueofelement= await this.driver.findElement(ele).getText();
       console.log(getvalueofelement);
        return getvalueofelement;
    }
}

module.exports=commonpage;