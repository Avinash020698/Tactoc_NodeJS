const Initpages =require('../PageObjects/initpages');
const initiatedriver =require('../Utility/driverinit')
const { expect } =require('chai');
require('chromedriver')

 
describe('TATOC Automation', function ()
 {
    let driver;
    let pages;
    pages = new Initpages(initiatedriver('chrome'));
    
    before(async () => {
        
    })
 
    it('If user is able to navigate to basic course section', async function () {
       this.timeout(40000);
       await pages.HomePage.navigate("http://10.0.1.86/tatoc/");
       let flashtxt=await pages.HomePage.BasicCourseLaunch();
       expect(flashtxt).to.include('Grid Gate')
    })

    
    it('If user is able to click on "green box" and continue', async function () {
      this.timeout(20000);
      let flashtxt=await pages.Grid.clickOnGreenBox();
      expect(flashtxt).to.include('Frame Dungeon')
    })

    it('If user is able to make color of boxes same and continue', async function () {
        this.timeout(20000);
        let flashtxt = await pages.Frame.makeColorSame();
        expect(flashtxt).to.include('Drag Around')
})

    it('If user is able to drag and drop and continue', async function () {
        this.timeout(10000);
        let flashtxt =await pages.DragAndDrop.performTask();
    expect(flashtxt).to.include('Popup Window');
 })
 
 it('If user is able to add launch the new window and proceed to handle cookie', async function () {
   this.timeout(10000);
    let flashtxt = await pages.PopUp.Task();
    expect(flashtxt).to.include('Cookie Handling');
})

it('If user is able to add token and finish', async function () {
     this.timeout(10000);
      let flashtxt=await pages.CookieHandling.perform();
    expect(flashtxt).to.include('End');
 })

afterEach(function () {
  
})
 })
