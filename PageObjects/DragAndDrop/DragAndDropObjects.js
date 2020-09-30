const {By}=require('selenium-webdriver');

const objects=
{
    container:By.id("dragbox"),
    draggableItem:By.id("dropbox"),
    proceedLocator:By.linkText("Proceed"),
}
module.exports=objects;