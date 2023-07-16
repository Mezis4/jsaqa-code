describe('books app basic test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('start page display', () => {

    cy.contains('Books list').should('be.visible');
    cy.contains('Log in').should('be.visible');
  });

  it('should login valid email and password', () => {
    
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });

  it('should not login with empty mail', () => {
    
    cy.login(null, 'test');

    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  });

  it('should not login with empty password', () => {
    
    cy.login('test@test.com', null);

    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  });

  it('should add a created book to the favorites', () => {

    cy.login('test@test.com', 'test');

    cy.addBook('Властелин Колец', 'Братство кольца', 'Дж. Р. Р. Толкин');
    cy.contains('Властелин Колец').should('be.visible');

    cy.contains('Властелин Колец').find('.btn-success').click();
    cy.contains('Властелин Колец').find('.btn-secondary').should('have.text', 'Delete from favorite');
    cy.contains('Favorites').click();
    cy.contains('Властелин Колец').should('be.visible');
  });

  it('should delete a book from the favorites', () => {
    cy.login('test@test.com', 'test');

    cy.addBook('Темная башня', 'Стрелок', 'Стивен Кинг');
    cy.contains('Темная башня').find('.btn-success').click();
    cy.deleteFavorite('Темная башня');

    cy.contains('Темная башня').should('not.exist');

  });

  it('should open download page for a book from the favorites', () => {
    // опечатка в кнопке скачать (Dowload)
    cy.login('test@test.com', 'test');

    cy.addBook('Политика у шимпанзе', 'Научпоп', 'Франс де Валь');
    cy.contains('Политика у шимпанзе').click();
    cy.downloadPage('Политика у шимпанзе');

    cy.get('body h2').should('have.text', 'Политика у шимпанзе');
    cy.contains('Dowload book').should('be.visible');
  });
})