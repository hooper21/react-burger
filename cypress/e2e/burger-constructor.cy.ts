import { USER_TEST_EMAIL, USER_TEST_PASSWORD } from "../../src/config";

const UI_URL = "http://localhost:3000";

Cypress.Commands.add("clearThenType", { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).clear().type(text);
});

describe('Burger Constructor UI Tests', () => {
  
    it("Should open main page", function () {
        cy.visit(UI_URL);
    });

    it("Should contains empty constructor", () => {
        cy.contains('Соберите свой Steller Burger');
    });

    it('Should click and open card modal', () => {
        
        // Click to some ingredient
        cy.get('img[alt="Флюоресцентная булка R2-D3"]').closest('article').click();
        
        // Check visibled
        cy.get('[class^=Modal_body__]').as('modal');
        cy.get('@modal').should('be.visible');

        cy.get('@modal').contains('Детали ингредиента');
        cy.get('@modal').contains('Флюоресцентная булка R2-D3');
        
        // Check hidden
        cy.get('@modal').find("[class^=Modal_close__]").click();
        cy.get('@modal').should('not.exist');

    });

    it('Drag & Drop ingredients', () => {
        
        // Add the 1st bun
        cy.get('[class^=IngredientsList_list__]').get('img[alt="Флюоресцентная булка R2-D3"]').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_list__]').first().trigger('drop');

        // Change to another bun
        cy.get('[class^=IngredientsList_list__]').get('[class^=IngredientCard_card__]').eq(1).trigger('dragstart');
        cy.get('[class^=BurgerConstructor_list__]').first().trigger('drop');

        // Add ingredients
        cy.get('[class^=IngredientsList_list__]').get('img[alt="Соус фирменный Space Sauce"]').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_list__]').first().trigger('drop');

        cy.get('[class^=IngredientsList_list__]').get('img[alt="Говяжий метеорит (отбивная)"]').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_list__]').first().trigger('drop');

        cy.get('[class^=IngredientsList_list__]').get('img[alt="Соус традиционный галактический"]').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_list__]').first().trigger('drop');

        // Remove ingredient
        cy.get('[class^=BurgerConstructor_list__]').get('img[alt="Соус фирменный Space Sauce"]').parent().get('[class^=constructor-element__action]').first().click();
        
    });
    

    it('Should click authorize button', () => {

        // Check visibled
        cy.get('[class^=BurgerConstructor_order__]').get('[class^=button_button__]').click();

    });

    it('Should authorize', () => {        

        // Check login page is opened
        cy.url().should('include', '/login');

        cy.get('[class^=Login_form__]').as('form');

        // Type login
        cy.get('@form').get('[name=email]').clear().type(USER_TEST_EMAIL);

        // Type password
        cy.get('@form').get('[name=password]').clearThenType(USER_TEST_PASSWORD);

        // Click enter
        //cy.get('@form').get('[class^=button_button__]').click();
        cy.get('@form').submit().wait(2000);
        
    });
    

   
    it('Should click order button', () => {

        // Check visibled
        cy.get('[class^=BurgerConstructor_order__]').get('[class^=button_button__]').click();
        cy.wait(3000);

        // Check visibled
        cy.get('[class^=Modal_body__]').as('modal');
        cy.get('@modal').should('be.visible');
        
        cy.get('@modal').contains('идентификатор заказа');
        
        // Check hidden
        cy.get('@modal').find("[class^=Modal_close__]").click();
        cy.get('@modal').should('not.exist');

        //cy.document().trigger('keydown', { key: 'Escape'});

    });
       

});