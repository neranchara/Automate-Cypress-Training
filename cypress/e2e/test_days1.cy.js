
var object_value = new Array();
object_value[0] = {"patient_fullname" : "Test AAAAAAA" , "age" : 34};
object_value[1] = {"patient_fullname" : "Test BBBBBBB" , "age" : 14};
object_value[2] = {"patient_fullname" : "Test CCCCCCC" , "age" : 20};
object_value[3] = {"patient_fullname" : "Test DDDDDDD" , "age" : 9};
object_value[4] = {"patient_fullname" : "Test TTTTTTT" , "age" : 67};

describe('template spec', () => {
  it('for loop object', () => {
    for(let i = 0 ; i < object_value.length; i++ ){
      cy.log(`Patient Name : ${object_value[i]["patient_fullname"]} และอายุ : ${object_value[i]["age"]}`)
    }
  })
})