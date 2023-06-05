describe("login test", () => {
    it("visits our application", () => {
      cy.visit("localhost:4200/login");
      cy.get("#auth-user-email").type("bacancy2@mail.com");
      cy.wait(5000);
      cy.get("#auth-user-pass").type("12345");
      cy.get('.btn').click();
    });

  });