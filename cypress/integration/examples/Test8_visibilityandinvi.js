//To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My Third Test', function () { 

    it('My Third test case', function() { 
        //invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       cy.get("#displayed-text").should('be.visible')
       cy.get("#hide-textbox").click()

       cy.get("#displayed-text").should('not.be.visible')
       cy.get("#show-textbox").click()
       cy.get("#displayed-text").should('be.visible')
        
        
    }) 
}) 