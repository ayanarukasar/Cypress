//To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My Third Test', function () { 

    it('My Third test case', function() { 
        //invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        /*verify if the checkbox is check or not
        validate if option1 is clicked or not*/

        //First: It will check option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //Second: It will uncheck option1
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Third: It will check option2 and 3
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Four: It will uncheck option2 and 3
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        //Radio-Button
        cy.get('[value="radio2"]').check().should('be.checked')
        
        
    }) 
}) 