const { By } =require("selenium-webdriver");
 
const pageobjects={
   boxColor: By.xpath('//*[@id="answer"]'),
   parentframe: By.id('main'),
   childframe: By.xpath('//*[@id="child"]'),
   repaintBoxLocator: By.linkText('Repaint Box 2'),
   proceedLocator: By.linkText('Proceed'),
   header: By.xpath('//h1'),
}
module.exports=pageobjects;