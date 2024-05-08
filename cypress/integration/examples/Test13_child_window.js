// To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My eight Test', function () { 

    it('My eight test case', function() { 
        // invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        /* 
        directly hit the url without clicking on any button 
        or user href tag to visit that url 
        1. To click url
        2. To visit href link
        */

        /*
        open window

        Here we are concatenating cypress method with prop method prop is not a cypress method, so first we are resolving this promise
        */

        cy.get('#opentab').then(function(e1){
            const url =e1.prop('href')
            //using .visit can redirect you to the particular url, you cant perform automation
            cy.visit(url)

            //inside func only: new url page can be automated
            cy.origin(url, ()=>
        {
            cy.get("div.sub-menu-bar a[href*='about']").click()
        })
        })
        
    }) 
}) 