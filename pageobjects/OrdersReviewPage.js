const { expect } = require("@playwright/test");

class OrdersReviewPage
{
constructor(page)
{
    this.page = page;
this.country = page.locator("[placeholder*='Country']");
this.dropdown = page.locator(".ta-results");
this.emailId = page.locator(".user__name [type='text']").first();
this.submit =  page.locator(".action__submit");
this.orderConfirmationText = page.locator(".hero-primary");
this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(countryCode,countryName)
{
    await this.country.pressSequentially("ind");
    await this.dropdown.waitFor({ state: "visible" });
    const countryOption = this.dropdown.locator("button", { hasText: countryName }).first();
    await countryOption.waitFor({ state: "visible" });
    await countryOption.click();

}

async VerifyEmailId(username)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
module.exports = {OrdersReviewPage};
   