var first_name = 'Neranchara'
var last_name = 'Kaewsiri'
before(() => {
  // root-level hook
  // runs once before all tests
})
beforeEach(() => {
  // root-level hook
  // runs before every test block
  cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6').wait(500)
  cy.get('.v-btn').click()
  // Login function
})
afterEach(() => {
  // runs after each test block
  //cy.get('[data-testid="royal_login_button"]').click()
})
after(() => {
  // runs once all tests are done
  // Log Out function
})
describe('Hooks 1', () => {
  it('H1 add case 1 Change Language EN', () => {
    cy.get('[role="combobox"]').click()
    cy.get('.v-list-item-title').contains('EN').click()
  //})
 // it('H1 add case 2 select ผู้ประกอบการ-บุคคลธรรมดา(Business customer – Individual', () => {
    cy.get('#input-7').click()
  ///})
  //it('H1 add case 3 Input ชื่อ นามสกุล', () => {
    cy.get('#input-9').type(first_name)
    cy.get('#input-11').type(last_name)  
  //})
  //it('H1 add case 4 click เลขบัตรประชาชน', () => {
    cy.get('#input-18').click()
    //cy.get('#input-13-messages > .v-messages__message').should('contain','เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
  //})
  //it('H1 add case 5 input เลขบัตร 1111111111111', () => {
    cy.get('#input-42').type('1111111111111')
  //})
  //it('H1 add case 6 verify alert message เลขบัตรปชชไม่ถูกต้อง', () => {
    //cy.get('#input-9').type(first_name)
    cy.get('#input-42-messages > .v-messages__message').should('contain','The TH Citizen number you entered is invalid. Example: 3100700099999')
  })
})