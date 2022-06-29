describe("Example", () => {
    beforeEach(async () => {
        await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining("a-million-more")
    })
    it("accept cookie settings",function (){
        console.log("page opened")
        $("#onetrust-accept-btn-handler").click()
    });

    it("should save some screenshots", async () => {
      
        await browser.saveFullPageScreen("fullPage", {
            
        });

    });

    it("should compare successful with a baseline", async () => {
        await expect(
            await browser.checkFullPageScreen("fullPage", {
                /* some options */
            })
        ).toEqual(0);
    });
});