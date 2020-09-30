const {By} =require('selenium-webdriver');

 const object =
{
    greenBoxLocator:By.className('greenbox'),
    FrameDungeonLocator: By.xpath('//h1[text()="Frame Dungeon"]')
}

module.exports=object;