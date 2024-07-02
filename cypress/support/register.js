Cypress.Commands.add("register", (user , pass) => {
    cy.visit('http://his-centrix-staging.princhealth.service/')
    cy.contains('Welcome to Centrix')
    cy.get('#login').type(user);
    cy.wait(1000);
    cy.get('#password').type(pass).wait(1000);
    cy.get('#loginbutton').click();
  })