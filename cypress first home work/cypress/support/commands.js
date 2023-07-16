// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Log in').click();

  if(email) {
    cy.get('#mail').type(email);
  }
  if(password) {
    cy.get('#pass').type(password);
  }
  cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (bookName, description, author) => {
  cy.get('button.btn-warning').click();

  if(bookName) {
    cy.get('#title').type(bookName);
  }

  if(description) {
    cy.get('#description').type(description);
  }

  if(author) {
    cy.get('#authors').type(author);
  }

  cy.contains('Submit').click();
});

Cypress.Commands.add('deleteFavorite', (bookName) => {
  cy.contains('Favorites').click();
  cy.url().should('include', '/favorites');
  cy.contains(bookName).find('.btn-secondary').click();
});

Cypress.Commands.add('downloadPage', (bookName) => {
  cy.contains(bookName).click();
  cy.url().should('include', '/book');
});