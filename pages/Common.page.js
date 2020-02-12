import { browserInteractions } from "taif/lib"
require('dotenv').config()

class Common {

    get baseUrl() {
        return process.env.TEST_APP_URL
    }

    get signInPage()
    {
        return 'index.php?controller=authentication&back=my-account'
    }

    get emailField() {
        return browserInteractions.findElement('[id="email"]')
    }
    get passwordField() {
        return browserInteractions.findElement('[id="passwd"]')
    }

    get submitLoginButton() {
        return browserInteractions.findElement('[id="SubmitLogin"]')
    }

    get InvalidCredentialsError() {
        return browserInteractions.findElement('.alert.alert-danger')
    }


    fillEmailField(email) {
        browserInteractions.fillElement(this.emailField, email)
    }
    fillPasswordField(password) {
        browserInteractions.fillElement(this.passwordField, password)
    }

    clickSubmitLoginButton() {
        browserInteractions.click(this.submitLoginButton)
    }

    openSignInPage() {
        browserInteractions.openUrl(this.baseUrl +  this.signInPage)
    }

    loginWithInvalidCredentials() {
    this.fillEmailField("email@mail.com")
    this.fillPasswordField("password")
    this.clickSubmitLoginButton()
    }

    invalidPasswordErrorIsDisplayed() {
    browserInteractions.assertElementDisplayed(this.InvalidCredentialsError)
    }
}

export const commonPage = new Common();
