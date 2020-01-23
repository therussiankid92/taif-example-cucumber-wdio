import { Given, When, Then } from 'cucumber';
import {commonPage} from "../pages/Common.page";


Given(/^a prospect lead is on the (.+) landing$/, page => {
    commonPage.openPage(page)
})

When(/^an address is searched for in the buyers page$/, () => {
    commonPage.fillGoogleAddress()
    commonPage.clickSearchButton()
})

Then(/^the list of flats is displayed$/, () => {
    commonPage.listOfFlatsIsDisplayed()
})
