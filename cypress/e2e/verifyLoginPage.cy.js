const con_a = "ทดสอบ con_a"
//let let_a = "ทดสอบ let_a"
var car = new Array();
car[0]="Toyota";
car[1]="Honda";
car[2]="Suburu";

var object_value = {"first_name" : "Neranchara" ,"age" : 22}

let x = 20
let y = 10
let bool = false

describe('template spec', () => {
  it('TC01_number', () => {
    if( x == 20 && y == 10){
      cy.log("x = 20 && y = 10")
    }
    else if ( x == 10 || y == 10){
      cy.log("x == || y == 10")
    }
    else{
      cy.log("x != 10")
    }
  })
  it('TC02_bool', () => {
    if ( !bool ){
      cy.log("bool = True")
    }
    else{
      cy.log("bool = false")
    }
  })
  it('TC03_loop', () => {
    for (let i = 0 ; i < 11 ; i ++){
    cy.log(i)
    }
  })

  it('TC04_arrays', () => {
    for (let i = 0 ; i < 11 ; i ++){
    cy.log(i)
    }
  })

  it('TC05_loop_arrays', () => {
    for (let i = 0 ; i < car.length ; i ++){
    cy.log('RUN LOOP CAR : ${cars[i]}')
    }
  })

  function login (user, pass){
    cy.log('USER : $(user)')
    cy.log('PASSWORD : $(pass)')
  }
})