const { By } =require('selenium-webdriver');
 
 const objects = {
    generateTokenLocator: By.linkText('Generate Token'),
    proceedLinkLocator: By.linkText('Proceed'),
    tokenLocator: By.id('token'),
    ObstacleLocator: By.xpath('//span[@class = "finish"]')
}
module.exports=objects;