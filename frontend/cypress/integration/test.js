describe('General functionality', () => {

	it('Should load the index page', () => {
		cy.visit('http://localhost:8080');
	});

	it('There is an input field', () => {
		cy.visit('http://localhost:8080');
		cy.get('input[type=text]').should('be.visible');
	});

	it('There is a submit button', () => {
		cy.get('button[type=submit]').should('be.visible');
	});

});

describe('Adding items', () => {

	it('Can add an item', () => {
		cy.get('input[type=text]')
		  .type('Handen wassen tegen het corona virus');

		cy.get('button[type=submit]').click();
	});
  
	it('Should contain "Handen wassen tegen het corona virus"', () => {
		cy.get('#todo-list').contains('Handen wassen tegen het corona virus');
	});

});

describe('Deleting items', () => {

	it('Can delete item', () => {
		cy.get('#todo-list a').click();

		cy.get('#todo-list').should('not.contain', 'Handen wassen tegen het corona virus');
	});

});