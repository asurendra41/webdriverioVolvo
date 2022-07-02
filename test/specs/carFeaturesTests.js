const VolvoFeatures  = require('../pageobjects/features.page');
const VolvoCars = require('../pageobjects/volvo.page');
var resources= require('../resources/textvalidation.json');

describe("Volvo cars features and other links from campaign page",function(){

    it("Should Verify campaign URL",()=>{
        browser.url("/intl/v/car-safety/a-million-more")
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining(resources.mainUrl)
    })
    it("Should accept cookie settings",async() => {
        console.log("page opened")
        VolvoCars.acceptCookie.click()
    })
    it("Should verify the link text for learn more about car saftey",async function (){
        await expect(VolvoFeatures.carsafetyLink).toHaveHrefContaining(resources.carsafetylink)
        await VolvoFeatures.carsafetyLink.click()
        expect(browser).toHaveUrlContaining(resources.carsafetylink)
        browser.back()
    }) 
    
    it(" Should verify features of volvo cars section",async function(){
        console.log('displayed text'+await VolvoFeatures.carFeatures[0].getText())
        for(let i=0;i<=3;i++){
        await expect(VolvoFeatures.carFeatures[i]).toExist()
        await expect(VolvoFeatures.carFeatures[i]).toHaveTextContaining(resources.carfeature[i])
        }
   })

    it(" Should validate decades of innovation section", async function(){
        
        await expect(VolvoFeatures.decadesInnovationHeader).toHaveText(resources.decadesofInnovationheader)
        await expect(VolvoFeatures.learnmoreLink).toHaveHrefContaining(resources.learnmorelink)
    })
    it("Should Validate avaialble volvo car models from the campaign page",async function (){
        await expect(VolvoFeatures.carmodel1).toHaveText(resources.carmodel1) 
        VolvoFeatures.carmodel1.click()
        browser.back()
        // Can be added with other models available in the page here....
    })
    
})

