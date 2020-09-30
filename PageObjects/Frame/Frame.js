const pageobjects  =require ('./FrameObjects');
 
class Frame {
    constructor (driver){
        this.driver=driver;
    }
 
    async makeColorSame()
    {
 
        let webelement= await this.driver.findElement(pageobjects.parentframe);
        await this.driver.switchTo().frame(webelement)
         let Element1 =  await this.driver.findElement(pageobjects.boxColor);
        var className1 = await Element1.getAttribute('class')    
       
       let webelement1= await this.driver.findElement(pageobjects.childframe);
        await this.driver.switchTo().frame(webelement1)
      await  this.driver.sleep(2000);  
       let Element2 = await this.driver.findElement(pageobjects.boxColor);
       var className2 = await Element2.getAttribute('class')
         await this.driver.switchTo().defaultContent();
         this.driver.sleep(1000);
		 var className3=className2;
        
        let i;
        i=4;
        let j;
        j=0;
        while(i!=j)
        {
            if(!(className1===(className3)))
                    {
                        webelement= await this.driver.findElement(pageobjects.parentframe);
                        await this.driver.switchTo().frame(webelement) 
                        this.driver.sleep(1000);
                        await this.driver.findElement(pageobjects. repaintBoxLocator).click();
                        webelement1= await this.driver.findElement(pageobjects.childframe);
                        await this.driver.switchTo().frame(webelement1)
                        let Element3=await this.driver.findElement(pageobjects.boxColor);
                        className3=await Element3.getAttribute('class');
                        this.driver.sleep(1000);
                        await this.driver.switchTo().defaultContent();
                        this.driver.sleep(1000);
                    }
            else
                {
                    j=4;
                }
        }


        webelement= await this.driver.findElement(pageobjects.parentframe);
        await this.driver.switchTo().frame(webelement)
        await this.driver.sleep(2000);
		await this.driver.findElement(pageobjects.proceedLocator).click();
        await this.driver.switchTo().defaultContent();
    
       return await this.driver.findElement(pageobjects.header).getText();
    }
    
   }
    

 
module.exports=Frame;
