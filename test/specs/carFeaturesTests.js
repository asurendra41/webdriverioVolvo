const VolvoFeatures  = require('../pageobjects/features.page');
const VolvoCars = require('../pageobjects/volvo.page');

describe("Volvo cars features and other links from campaign page",function(){

    it("Should Verify campaign URL",()=>{
        browser.url("/intl/v/car-safety/a-million-more")
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining("a-million-more")
    })
    it("Should accept cookie settings",async() => {
        console.log("page opened")
        // await $("#onetrust-accept-btn-handler").click()
        VolvoCars.acceptCookie.click()
    })
    it("Should verify the link text for learn more about car saftey",async function (){
        await expect(VolvoFeatures.carsafetyLink).toHaveHrefContaining('car-safety')
        await VolvoFeatures.carsafetyLink.click()
        expect(browser).toHaveUrlContaining('car-safety')
        browser.back()
    }) 
    
    it(" Should verify features of volvo cars section",async function(){
        console.log('displayed text'+await VolvoFeatures.carFeatures[0].getText())
        await expect(VolvoFeatures.carFeatures[0]).toExist()
        await expect(VolvoFeatures.carFeatures[0]).toHaveTextContaining('Speed cap')
        await expect(VolvoFeatures.carFeatures[1]).toExist()
        await expect(VolvoFeatures.carFeatures[1]).toHaveTextContaining('Highway pilot')
        await expect(VolvoFeatures.carFeatures[2]).toExist()
        await expect(VolvoFeatures.carFeatures[2]).toHaveTextContaining('monitoring cameras')
        await expect(VolvoFeatures.carFeatures[3]).toExist()
        await expect(VolvoFeatures.carFeatures[3]).toHaveTextContaining('Care Key')
    })

    it(" Should validate decades of innovation section", async function(){
        
        await expect(VolvoFeatures.decadesInnovationHeader).toHaveText("Decades of innovation")
        await expect(VolvoFeatures.learnmoreLink).toHaveHrefContaining('safety-heritage')
    })
    it("Should Validate avaialble volvo car models from the campaign page",async function (){
        await expect(VolvoFeatures.carmodel1).toHaveText("XC90 Recharge") 
        VolvoFeatures.carmodel1.click()
        browser.back()
        // we can add other models available in the page here....
    })
    
})

