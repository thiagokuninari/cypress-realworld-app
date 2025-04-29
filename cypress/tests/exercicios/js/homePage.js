class HomePage {

    selectorList() {
        const selectors = {
            homePageGrid: '[data-test="main"]',
        }

        return selectors
    }

    checkHomePage() {
        cy.get(this.selectorList().homePageGrid)
    }
}

export default HomePage
