describe("register true", () => {
  it("register with correct input", () => {
    cy.visit("localhost:4200/register");
    cy.get("#auth-user-username").type("testuser");
    cy.wait(6000);
    cy.get("#auth-user-email").type("testuser@mail.com");
    cy.wait(6000);
    cy.get("#auth-user-pass").type("123456");
    cy.get('.btn').click();
  });
});
