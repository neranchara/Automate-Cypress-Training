let token
let idUnivers
before(() => {
  // root-level hook
  // runs once before all tests
    cy.POST_auth().then((res_token) => {
      token = res_token
      cy.log(token).wait(2000)
    });
})
beforeEach(() => {
  // root-level hook
  // runs before every test block
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
describe('API', () => {
    it.skip('GET User', () => {
        cy.GET_User().then((response)=>{
            expect(response.status).to.eq(200);
            var data = response.body
            cy.log(data).wait(1000)
            cy.log(data[0].fname).wait(1000)
            cy.log(data[1].fname).wait(1000)
            cy.log(data[2].fname).wait(1000)
            assert.equal(data[0].fname,'Karn')
            assert.equal(data[1].fname,'Ivy')
            assert.equal(data[2].fname,'Walter')
        });
      })
      
    it.skip('POST_Attraction', () => {
        cy.POST_Attraction(token).then((response) => {
          expect(response.status).to.eq(200);
          var data = response.body
          cy.log(data.attraction.name).wait(2000)
          assert.equal(data.attraction.name,'KK University')
        });
      })


      it('POST_CreateAttraction', () => {
        cy.POST_CreateAttraction(token).then((response) => {
          expect(response.status).to.eq(200);
          var data = response.body
          cy.log(data.attraction.id).wait(2000)
          idUnivers = data.attraction.id
          cy.log("Hello"+idUnivers).wait(1000)
        });
      })

      it('PUT_UpdateAttraction', () => {
        cy.POST_UpdateAttraction(token,idUnivers).then((response) => {
          expect(response.status).to.eq(200);
          var data = response.body
          console.log(data.attraction.id)
          cy.log(data.attraction.id).wait(2000)
          assert.equal(data.attraction.id, idUnivers)
          cy.log(data.attraction.name).wait(2000)
          assert.equal(data.attraction.name,'Rangsit University (RSU)')
        });
      })

    })

