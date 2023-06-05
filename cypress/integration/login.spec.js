describe("login", () => {

  it("login without input", () => {
    cy.visit("localhost:4200/login");
    cy.get('.btn').click();
    cy.wait(6000)
  });

  it("login incorrect input", () => {
    cy.visit("localhost:4200/login");
    cy.get("#auth-user-email").type("bacancy@mail2.com");
    cy.wait(6000);
    cy.get("#auth-user-pass").type("000000");
    cy.get('.btn').click();
    cy.wait(6000)
  });

  it("login with correct input", () => {
    cy.visit("localhost:4200/login");
    cy.get("#auth-user-email").type("bacancy@mail");
    cy.wait(6000);
    cy.get("#auth-user-pass").type("123456");
    cy.get('.btn').click();
  });

});
