import { Given, When, Then } from 'cucumber';
import {commonPage} from "../pages/Common.page";


Given(/^a non-logged in user is on the sign in page$/, () => {
    commonPage.openSignInPage()
})

When(/^invalid credentials are provided$/, () => {
    commonPage.loginWithInvalidCredentials()
})

Then(/^the login was unsuccessful$/, () => {
    commonPage.invalidPasswordErrorIsDisplayed()
})
