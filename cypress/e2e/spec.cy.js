describe("Test my site is working", () => {
  it("Visits github pages", () => {
    cy.visit("https://liber09.github.io/EscapeRoomGroupAssignment/");
    cy.get(".main-menu-item").contains("Play online");
  });
  it("Visits challenge page", () => {
    cy.visit("https://liber09.github.io/EscapeRoomGroupAssignment/challenges.html");
    cy.get("#filterButton").click();
  });
});
