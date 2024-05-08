//To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My First Test', function () { 

    it('My first test case', function() { 
        //invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //selenium get hit the url in browser, cypress get acts like findEleent of selenium

        //use type to write string text
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        //Its validating with invisible elements also
        // cy.get('.product').should('have.length', 4)

        //To validate only visible elements use :visible
        // cy.get('.product:visible').should('have.length', 4)

        //Validate our goal if four results are displaying or not

        /*Parent-Child Chaining
        scope is decreased to products block only*/
        // cy.get('.products').find('.product').should('have.length', 4)

        /*
        methods: contains, equal, find and get
        Click on Add to Cart
        and resolving the promise
        */
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log("Hello Cypress")
        })

        /* Req: Grab all the product name and add only capsicum when its found
        iterate where capsicum is present 
        Method: each*/
        
        /*
        To RE-USE LOCATORS EVERYTIME
        // Aliases: part of optimization, to act as a variable
        cy.get('.products').as('productsLocator')
        //Before
        cy.get('.products').find('.product').should('have.length', 4)
        //After
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        */

        // Aliases: part of optimization, to act as a variable
        cy.get('.products').as('productsLocator')

        cy.get('@productsLocator').find('.product').each(($e1, index, $list) => {

           const textVEG = $e1.find('h4.product-name').text()
           if(textVEG.includes('Cashew'))
           {
            //with .find click method is depreciated so wrap it using cy.wrap() method
            cy.wrap($e1).find('button').click()

            console.log('HelloWorld')
           }
        })

        //DO NOT USE
        /*
        const logo = cy.get('.brand')
        //To print something we use method: cy.log()
        cy.log(logo.text())
        */

        //this is to assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        //DO USE
       cy.get('.brand').then(function(logoelement)
       {
        //To print something we use method: cy.log()
        cy.log(logoelement.text())
    })
        

    
    }) 
}) 