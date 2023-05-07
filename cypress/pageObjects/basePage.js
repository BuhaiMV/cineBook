export default class BasePage {
    open(path = '/') {
        return cy.visit(`https://cine-books.com${path}`)
    }
}