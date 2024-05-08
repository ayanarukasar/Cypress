// To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My eight Test', function () { 

    it('My eight test case', function() { 
        // invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        /*
        //give the parent near element css
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
        */

        // forcefully clickinh hidden pop-ups
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')
    }) 
}) 