var VolvoCars = require('../pageobjects/volvo.page');
var resources= require('../resources/textvalidation.json');

describe("Visual regression testing", () => {
    beforeEach(async () => {
        await browser.url("/intl/v/car-safety/a-million-more");
        browser.maximizeWindow()
        expect(browser).toHaveUrlContaining(resources.mainUrl)
    })
    it("Should accept cookie settings",function (){
        console.log("page opened")
        VolvoCars.acceptCookie.click()
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