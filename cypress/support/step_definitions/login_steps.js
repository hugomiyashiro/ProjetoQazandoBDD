/// <reference types="cypress" />

// 2 - Transformar o gherkin em métodos

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

const email = 'qazando@qazando.com'

Given("I am on login screen", () => {
    home_page.acessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail(email)
})

Given("I fill my credencials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword('123456')
})

When("I click on login", () => {
    login_page.doLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)  
})

Then("I see success message", () => {
    login_page.checkSuccessMessage(email)
})