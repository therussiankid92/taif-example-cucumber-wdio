import { browserInteractions } from "taif/lib"
require('dotenv').config()

class Common {

    get baseUrl() {
        return process.env.TEST_APP_URL
    }

    listOfFlatsIsDisplayed() {
        browserInteractions.wait(5000)
        browserInteractions.checkUrlContainsPath('/venta-inmuebles/')
    }

    openPage(page) {
        browserInteractions.openUrl(this.baseUrl + page)
    }

    get googleAddressField() {
        return browserInteractions.findElement('[data-qa="googleAddress"]')
    }
    get googleFirstReturnedAddressOption() {
        return browserInteractions.findElement('.pac-item')
    }

    get searchButton() {
        return browserInteractions.findElement('[data-qa="searchAddress"]')
    }


    fillGoogleAddress() {
        browserInteractions.fillElement(
            this.googleAddressField, "C/Arago 100"
        )
        browserInteractions.waitForElementEnabled(
            this.googleFirstReturnedAddressOption
        )
        browserInteractions.click(this.googleFirstReturnedAddressOption)
    }

    clickSearchButton() {
        browserInteractions.waitForElementEnabled(this.searchButton)
        browserInteractions.click(this.searchButton)
    }
}

export const commonPage = new Common();
