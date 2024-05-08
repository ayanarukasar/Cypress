//To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My Second Test', function () { 

    it('My second test case', function() { 
        //invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
    
        cy.get('.products').as('productsLocator')

        cy.get('@productsLocator').find('.product').each(($e1, index, $list) => {

           const textVEG = $e1.find('h4.product-name').text()
           if(textVEG.includes('Cashews'))
           {
            cy.wrap($e1).find('button').click()
           }
        })
        cy.get('.cart-icon').click()
        // Locator of PROCEED TO CHECKOUT--('button[css="1"]')
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    
    }) 
}) 