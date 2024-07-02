describe('Query Mongo DB', () => {
    it('Call task find', () => {
        cy.task("find" , {
            query:{firstname : "FREDDIE"},
            collectionName:"patients" } ).then(result => {
            cy.log(result[0].lastname).wait(1000);
            cy.log(result[0].firstname).wait(1000);
            expect({ name: result[0].lastname }).to.eql({ name: 'OLSON' })
        });
      })
    })