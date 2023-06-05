describe("workshop test", () => {
    it("visits our application", () => {
      cy.visit("localhost:4200/login")
      cy.get('#auth-user-email').type('puspendra')
      cy.wait(4000);
      cy.get('#auth-user-pass').type('1234{enter}')

      cy.wait(4000);
    });
  });   