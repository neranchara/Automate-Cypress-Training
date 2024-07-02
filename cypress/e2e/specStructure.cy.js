//https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6
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
  it('H1 add case 1 กรุณาเลือกประเภทลูกค้า', () => {
    cy.get('#radio-group-3-messages > .v-messages__message').should('contain','กรุณาเลือกประเภทลูกค้า')
  })
  it('H1 add case 2 กรุณากรอกชื่อ', () => {
    cy.get('#input-9-messages > .v-messages__message').should('contain','กรุณากรอกชื่อ')
  })
  it('H1 add case 3 กรุณากรอกนามสกุล', () => {
    cy.get('#input-11-messages > .v-messages__message').should('contain','กรุณากรอกนามสกุล')
  })
  it('H1 add case 4 เบอร์โทรศัพท์มือถือ', () => {
    cy.get('#input-13-messages > .v-messages__message').should('contain','เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
  })
  it('H1 add case 5 Logo', () => {
    cy.get('[src="/v1.5/w-app/registration/Logo_White.png"]')
  })
  it('H1 add case 6 กรอกข้อมูลเพื่อลงทะเบียนสมัครสมาชิก', () => {
    //cy.get('#input-9').type(first_name)
    cy.get('.tw-text-xl').should('contain','กรอกข้อมูลเพื่อลงทะเบียนสมัครสมาชิก')
  })
  it('H1 add case 7 input data', () => {
    cy.get('#input-9').type(first_name)
    cy.get('#input-11').type(last_name)  
  })
  it.only('H1 add case 8 login facebook', () => {
    cy.get(login_facebook)
  })
})