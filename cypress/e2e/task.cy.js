/// <reference types="cypress" />

describe('Automation Task', () => {

    const date = new Date();
  
    it('Task 1', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.

      cy.visit('https://stg.zaptatech.com/')

      // just used due to internet issue
      cy.wait(2000)
      
      // Get desired element and trigger click event
      cy.get('.swiper-slide-next > a > .feature-card > .text-overlay > h4').click()
      
      // just used due to internet issue
      cy.wait(2000)

      // Assertions
      cy.get('.offers > .col-md-8 > :nth-child(2) > :nth-child(1)')
        .invoke('text')
        .should(text => {
          expect(text.replace("\n                        ", "")).to.eql('2\n                        Bedrooms'.replace("\n                        ", ""))
        })

      cy.get('.offers > .col-md-8 > :nth-child(2) > :nth-child(2)')
        .invoke('text')
        .should(text => {
          expect(text.replace("\n                        ", "")).to.eql('4\n                        Guests'.replace("\n                        ", ""))
        })
      
      cy.get('.offers > .col-md-8 > :nth-child(2) > :nth-child(3)')
        .invoke('text')
        .should(text => {
          expect(text.replace("\n                        ", "")).to.eql('2\n                        Bath'.replace("\n                        ", ""))
        })
      
      cy.get('.offers > .col-md-8 > :nth-child(4) > :nth-child(1)').should('contain', 'Wifi')

      cy.get('.offers > .col-md-8 > :nth-child(4) > :nth-child(2)')
        .invoke('text')
        .should(text => {
          expect(text).to.eql('Work Area')
        })
      
        cy.get('.offers > .col-md-8 > :nth-child(4) > :nth-child(3)')
        .invoke('text')
        .should(text => {
          expect(text).to.eql('Full Kitchen')
        })

        const fileName = "FIRST_[" + date.getHours().toString() + "-" + date.getMinutes().toString() + "-" + date.getSeconds().toString() + "]";
        cy.screenshot(fileName)

    })

})
  