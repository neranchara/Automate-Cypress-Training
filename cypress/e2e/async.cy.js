function taskOne(){
  setTimeout(function (){
    cy.log("this is task 1");
  }, 5000); 
  return Promise.resolve("Hello");
}

function taskTwo(){
    cy.log("this is task 2");
}

function taskThree(){
  setTimeout(function (){
    cy.log("this is task 3");
  }, 1000)
  return Promise.resolve("Good Bye");
}

describe('template spec basic', () =>{
  it('variable let 1', () => {
    taskOne().then((value) =>{
      cy.log(value)
    });
    taskTwo();
    //taskThree();
    taskThree().then((value) =>{
      cy.log(value)
    });
  })
})