// To get auto-suggestion add line no. 2
/// <reference types="Cypress" />

describe('My seventh Test', function () { 

    it('My Seventh test case', function() { 
        // invoke anything in cypress using `.cy` its like a driver
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //get the specific column data
       
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes('Python'))
            {
                // how to find next sibling using method `.next()`
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText= price.text()
                    expect(priceText).to.equal('25')
                })
            }

        })
    }) 
}) 