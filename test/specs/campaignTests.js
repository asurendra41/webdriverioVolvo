var VolvoCars = require('../pageobjects/volvo.page');
var resources= require('../resources/textvalidation.json');

describe("Car safety campaign",function(){
    
    it("Should lanunch the car safety campaign URL and Verify",async ()=> {
        await browser.url('/intl/v/car-safety/a-million-more')      
        await expect(browser).toHaveUrlContaining(resources.mainUrl)
        browser.maximizeWindow()
    })    
    it("Should Verify page Title",async ()=> {
        console.log("page opened")
        await expect(browser).toHaveTitleContaining(resources.browserTitle)
        await VolvoCars.acceptCookie.click()
    })
    it("Should verify volvo logo at top of the page", async function(){
        const volvologo=await VolvoCars.volvoLogo
        await expect(volvologo).toHaveAttr('src','https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg')
    })
    it("Should validate campaign header section", async() => {
       const header = await VolvoCars.mainHeader
       const headertext = await header.getText();
       console.log("header is "+headertext)
       await expect(header).toHaveTextContaining(resources.mainHeader)
    })
    it("Should verify the display of testimonial section", async function(){
        await expect(VolvoCars.testimonialHeader).toHaveText(resources.testimonialheader)        
        for(let i=0;i<=3;i++){
            await expect(VolvoCars.testimonialVideos[i]).toExist()
            await expect(VolvoCars.testimonialVideos[i].getText()).not.toBeNull
        }        
    })
    
    it("Should access Menu items",async() => {
        
        VolvoCars.menu.click()
        await expect(VolvoCars.menupanel).toBeDisplayed()
        
        await expect(VolvoCars.close).toBeDisplayed()
        VolvoCars.close.click()
    })
    
    it("Should validate our cars section",async()=> {
        VolvoCars.ourcars.click()
        await expect(VolvoCars.carspanel).toBeDisplayed()
    })
    it("Should verify page desclaimer section",async () =>{      
        expect(VolvoCars.desclaimer[0]).toHaveTextContaining(resources.desclaimer)
    })
})