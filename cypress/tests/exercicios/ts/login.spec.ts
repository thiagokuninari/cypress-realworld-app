import userData from '../data/userData.json'
import LoginPage from '../js/loginPage.js'
import HomePage from '../js/homePage.js'

const loginPage = new LoginPage
const homePage = new HomePage

describe('Login com sucesso', () => {

  it('Deve fazer login com um usuário válido', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.passoword)
      homePage.checkHomePage()
    })
  })

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.passoword)
      loginPage.checkInvalidAcess()
  })
})