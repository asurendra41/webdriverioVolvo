describe("launch page",function(){

    it("Verify URL",()=>{
        browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
        expect(browser).toHaveUrlContaining("a-million-more")
        browser.maximizeWindow()
    })    

    it("Verify Title",function (){
        console.log("page opened")
        expect(browser).toHaveTitleContaining("A million more")
        $("#onetrust-accept-btn-handler").click()
    })
    it("verify volvo logo", async function(){
        const volvologo= await $("//*[@id='site-nav-topbar-wrapper']//a/img")
        await expect(volvologo).toHaveAttr('src','https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg')
    })
    it("validate header", async() => {
       const header2 = await $("//*[@id='ModelIntro-1']/section/h2")
       const header2text = await header2.getText();
       expect(header2text).toHaveTextContaining("most controversial")
    })
    it("verify testimonial section", async function(){
        const testimonialHeader= await $("(//h2)[2]")
        await expect(testimonialHeader).toHaveText("One of a million")
        
        const testimonialvideos= await $$("//*[@data-autoid='videoTestimonials:container']")
        
        await expect(testimonialvideos[0]).toExist()
        await expect(testimonialvideos[0]).toHaveTextContaining('')
        
        await expect(testimonialvideos[1]).toExist()
        await expect(testimonialvideos[1]).toHaveTextContaining('')
        
        await expect(testimonialvideos[2]).toExist()
        await expect(testimonialvideos[2]).toHaveTextContaining('')
        
        await expect(testimonialvideos[3]).toExist()
        await expect(testimonialvideos[3]).toHaveTextContaining('')
    })
    
    it("Access Menu",async() => {
        const menu=await  $("#sitenav-sidenav-toggle")
        menu.click()
        const menupanel=await $("//*[@data-autoid='nav:sideNavigationContainer']")
        await expect(menupanel).toBeDisplayed()
        const close=await $("//*[@data-autoid='nav:siteNavCloseIcon']")
        close.click()
        
    })
    // it("Click on explore",async() => {
    //     const expol=await  $("//*[@id='nav:sideNavigation']//div[4]/button/em")
    //     expol.click()
    // })
    it("validate our cars section",async()=> {
        const ourcars=await  $("//*[@id='nav:topNavCarMenu']/em")
        ourcars.click()
        const carspanel=await $('#site-nav-cars-menu-section-panel-1')
        await expect(carspanel).toBeDisplayed()

    })

    it("Verify desclaimer section ",async () =>{
        const desclaimer=await $$("//*[@id='Disclaimer-1']//p")
        expect(desclaimer[0]).toHaveTextContaining("true stories from real people")
    })

})