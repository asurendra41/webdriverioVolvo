describe("Visual regression testing", () => {
    beforeEach(async () => {
        await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining("a-million-more")
    })
    it("Should accept cookie settings",function (){
        console.log("page opened")
        $("#onetrust-accept-btn-handler").click()
    });

    it("should save screenshots of campaign page", async () => {
        await browser.saveFullPageScreen("fullPage", {
        });
    });

    it("should compare successful with a baseline", async () => {
        await expect(
            await browser.checkFullPageScreen("fullPage", {
            })
        ).toEqual(0);
    });
});