const HomePage =require('./HomePage/HomePage'); 
const Grid =require('./Grid/Grid');
const Frame =require('./Frame/Frame')
const DragAndDrop=require('./DragAndDrop/DragAndDrop')
const PopUp=require('./PopUp/PopUp')
const CookieHandling=require('./CookieHandling/CookieHandling')
 
 function getAllThePages(driver) {
    driver.manage().window().maximize();

    return {
        
        HomePage: new HomePage(driver) ,
        Grid: new Grid(driver),
        Frame:new Frame(driver),
        DragAndDrop:new DragAndDrop(driver),
        PopUp:new PopUp(driver),
        CookieHandling:new CookieHandling(driver)
    }
}

module.exports=getAllThePages;