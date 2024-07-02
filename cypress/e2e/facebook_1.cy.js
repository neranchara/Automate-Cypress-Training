//describe('template spec', () => {
  //it('login facebook', () => {
  //cy.login_facebook('slamdunk_nk@windowslive.com','abc1234')
  //})
//})

const patient_info = require(`../fixtures/${Cypress.env('run_env')}/patient_info/patient.json`);
//const patient_info = require(`../fixtures/patient_info/patient.json`)
describe('template spec', () => {
  it('patient_info', () => {
    cy.visit('/')
    cy.get('#input-9').type(patient_info['first_name'])
    cy.get('#input-11').type(patient_info['last_name'])
    cy.get('#input-7').click()
    cy.get('#input-18').click()
    cy.get('#input-40').type(patient_info['cid'])
    //cy.get('#input-40-messages > .v-messages__message').should('contain','หมายเลขบัตรประชาชนไม่ถูกต้อง ตัวอย่าง: 3100700099999')
  })
})