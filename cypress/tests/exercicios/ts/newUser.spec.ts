import newUserData from '../data/newUserData.json'
import LoginPage from '../js/loginPage.js'
import NewUserPage from '../js/newUserPage'

const loginPage = new LoginPage
const newUserPage = new NewUserPage

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        loginPage.acessLoginPage()
        loginPage.clickSignUpButton()
        newUserPage.checkNewUserPage()
        newUserPage.fillSignUpForm(
            newUserData.newUserRegister.firstName, 
            newUserData.newUserRegister.lastName, 
            newUserData.newUserRegister.username,
            newUserData.newUserRegister.password,
            newUserData.newUserRegister.confirmPassword)
        newUserPage.clickSignUpButton()
        loginPage.checkLoginPage()
    })
  })
  
  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        loginPage.acessLoginPage()
        loginPage.clickSignUpButton()
        newUserPage.checkNewUserPage()
        newUserPage.clickButtonSignUpToFail()
        newUserPage.checkInvalidSignUP()
    })
  })