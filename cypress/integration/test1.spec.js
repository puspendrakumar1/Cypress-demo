describe("workshop test1", () => {
  it("visits our application", () => {
    cy.visit("localhost:4200/register");
    cy.get("#auth-user-username").type("bacancy");
    cy.wait(6000);
    cy.get("#auth-user-email").type("bacancy@mail.com");
    cy.wait(6000);
    cy.get("#auth-user-pass").type("123456");
    cy.contains(" Sign Up ").click();
  });
});
