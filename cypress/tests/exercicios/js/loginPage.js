class LoginPage {

    selectorsList() {
        const selectors =  {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type= 'submit']",
            wrongCredentialAlert: "[role='alert']",
            signUpButton: "[href='/signup']",
            loginPageGrid: '.SignInForm-paper'
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkInvalidAcess() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    clickSignUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
    }

    checkLoginPage() {
        cy.location('pathname').should('eq', '/signin')
        cy.get(this.selectorsList().loginPageGrid).should('be.visible')
    }
}

export default LoginPage
