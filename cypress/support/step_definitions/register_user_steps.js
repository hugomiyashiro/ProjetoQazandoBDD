/// <reference types="cypress" />

// 2 - Transformar o gherkin em métodos

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"

const name = 'Qazando'
const email = 'Qazando@Qazando.com'

Given("I am on register screen", () => {
    home_page.acessRegister()
})

Given("I fill name", () => {
    register_user_page.fillName(name)
})

Given("I fill e-mail on register", () => {
    register_user_page.fillEmailRegister(email)
})

Given("I fill e-mail invalid", () => {
    register_user_page.fillEmailRegister(name)
})

Given("I fill invalid password on register", () => {
    register_user_page.fillPassword('123')
})

Given("I fill password on register", () => {
    register_user_page.fillPassword('123456')
})

When("I click on register", () => {
    register_user_page.doRegister()
})

Then("I see the message on register {string}", (message) => {
    register_user_page.checkErrorMessageRegister(message)
})

Then("I see success message on register", () => {
    register_user_page.checkSuccessMessageRegister(name)
})