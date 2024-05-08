// To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My six Test', function () { 

    it('My Six test case', function() { 
        // invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Because every child url have target attribute in they html 
        cy.get('#opentab').invoke('removeAttr','target').click()
      
        /* 
        to further automate things on the next page do follow the thing below:
        cy.origin("<next page url>", ()=>
        {
            //code
        })
            */


        cy.origin("https://www.qaclickacademy.com", ()=>
        {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy')
        })
        
        
    }) 
}) 