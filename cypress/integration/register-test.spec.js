describe("register", () => {
    it("register without input", () => {
      cy.visit("localhost:4200/register");
      cy.get('.btn').click();
    });

    it("register with incorrect input", () => {
      cy.visit("localhost:4200/register");
      cy.get("#auth-user-username").type("User dummy");
      cy.wait(6000);
      cy.get("#auth-user-email").type("bacancyuser");
      cy.wait(6000);
      cy.get("#auth-user-pass").type("123456");
      cy.get('.btn').click();
    });

    it("register with correct input", () => {
      cy.visit("localhost:4200/register");
      cy.get("#auth-user-username").type("User3");
      cy.wait(6000);
      cy.get("#auth-user-email").type("bacancyuser1@mail.com");
      cy.wait(6000);
      cy.get("#auth-user-pass").type("123456");
      cy.get('.btn').click();
    });
  });
