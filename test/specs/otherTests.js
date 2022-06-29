describe("other tests in page",function(){

    it("Verify URL",()=>{
        browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining("a-million-more")
    })
    it("accept cookie settings",function (){
        console.log("page opened")
        $("#onetrust-accept-btn-handler").click()
    })
    it("verify the link text for learn more about car saftey",async function (){
        const carsafetylink=await $("//a[contains(@href,'car-safety')]")
        const hreflink=await carsafetylink.getAttribute('href')
        await expect(carsafetylink).toHaveHrefContaining('car-safety')
    }) 
    
    it("verify features of volvo cars section",async function(){
        const features= await $$("//*[@data-autoid='iconCallouts:iconTextItem']")
        console.log('displayed text'+await features[0].getText())
        
        await expect(features[0]).toExist()
        await expect(features[0]).toHaveTextContaining('Speed cap')
        
        await expect(features[1]).toExist()
        await expect(features[1]).toHaveTextContaining('Highway pilot')
        await expect(features[2]).toExist()
        
        await expect(features[2]).toHaveTextContaining('monitoring cameras')
        await expect(features[3]).toExist()
        
        await expect(features[3]).toHaveTextContaining('Care Key')
    })

    it("verify decades of innovation section", async function(){
        const doIHeader= await $("(//h2)[3]")
        await expect(doIHeader).toHaveText("Decades of innovation")
        const learnmorelink=await $("//a[contains(@href,'safety-heritage')]") 
        await expect(learnmorelink).toHaveHrefContaining('safety-heritage')
    })
    it("Verify first model name text",async function (){
        const model1 = await $("(//*[@data-autoid='productListCarouselItem:modelName'])[1]")
        const model1text=await model1.getText()
        console.log('displayed text '+model1text)
        await expect(model1).toHaveText("XC90 Recharge") 
        // model1.click()
    })
    
})

