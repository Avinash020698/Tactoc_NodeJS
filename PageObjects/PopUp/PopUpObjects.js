 const  {By} =require("selenium-webDriver");
 
 const objects=
{
    popupLocator:By.linkText("Launch Popup Window"),
    textboxLocator:By.id("name"),
    submitButtonLocator:By.id("submit"),
    proceedLinkLocator:By.linkText("Proceed"),
 
}
module.exports=objects;
