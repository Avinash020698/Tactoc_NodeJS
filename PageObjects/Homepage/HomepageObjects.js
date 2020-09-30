const { By }=require("selenium-webDriver");
 
const objects=
{
    basicCourseLocator:By.linkText('Basic Course'),
    GridGateLocator: By.xpath('//h1[text()="Grid Gate"]')
}
 
module.exports=objects;
