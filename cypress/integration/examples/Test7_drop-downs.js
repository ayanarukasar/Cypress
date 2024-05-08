//To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My Fourth Test', function () { 

    it('My Fourth test case', function() { 
        //invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       /*
       dynamic dropdowns -- means options  will be displayed based on inputs provides
       [tagname: select] static dropdowns -- means we can select from the given suggestions
       */
        
       //Static Dropdowns
       cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="India")
        {
            $el.click()
        }
    })
    //verifying if its have value as india or not
    cy.get('#autocomplete').should('have.value', 'India')

    }) 
}) 