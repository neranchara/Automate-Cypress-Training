describe('Login', () => {
  var object_value = {"username" : "neranchara.kapsuv" , "password" : "abc@12345"};
  it('Login', () => {
      cy.visit('http://his-centrix-staging.princhealth.service/#!/authentication/login')
      cy.contains('Welcome to Centrix') 
      cy.get('#login').type(`${object_value["username"]}`)
      cy.get('#password').type(`${object_value ["password"]}`)
      cy.get('#loginbutton').click()
    })
  })