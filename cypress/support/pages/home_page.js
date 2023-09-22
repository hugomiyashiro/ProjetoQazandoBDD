/// <reference types="cypress" />

// 3 - criar as ações da page

export default {
    acessLogin() {
        cy.visit('')
            .get('#top_header')

        cy.get('.fa-user')
            .click()
    },

    acessRegister() {
        cy.visit('')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
    },

}