describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#inputField").should("exist");
    cy.get("#button1").type("button 1 test")
    cy.get("#button2").type("button 1 test")
    cy.get("#button3").type("button 1 test")


  });
});
