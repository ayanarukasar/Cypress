// To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My Fifth Test', function () { 

    it('My Fifth test case', function() { 
        // invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cypress auto accepts alerts
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // window:alert

        cy.on('window:alert', (str)=>{

            // how to compare two str
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        // window:confirm
        cy.on('window:confirm', (str)=>{

            // how to compare two str
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        
        
    }) 
}) 