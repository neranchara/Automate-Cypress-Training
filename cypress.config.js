const { defineConfig } = require("cypress");
const MongoClient = require("mongodb").MongoClient;
//const MongoClient = require('cypress-mongodb').MongoClient;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //implement node event listeners here
      //mongo_DB
//URI
      const mongo_uri = {
        stg: "mongodb://neranchara.ka:iDxQ7w!%40XHGHf%26S7@172.24.2.11:27017/?authSource=arcusairdb&tls=false",
        qa: "mongodb://neranchara.ka:64%3EQO%7BfWaB%7Cr!)%3B%5B@172.24.2.10:27017/?authSource=arcusairdb_qa&tls=false"
      }
      on('task', {
         async find({ query, collectionName } ) {
         const uri = mongo_uri[config.env.run_env]
         //const uri = "mongodb://neranchara.ka:iDxQ7w!%40XHGHf%26S7@172.24.2.11:27017/?authSource=arcusairdb&tls=false"
         //const uri = "mongodb://neranchara.ka:64%3EQO%7BfWaB%7Cr!)%3B%5B@172.24.2.10:27017/?authSource=arcusairdb_qa&tls=false"
         //const uri = "mongodb://arisa.th:LrDo3FFO5fx9vb7v@172.24.2.11:27017/?tls=false&authSource=arcusairdb"
          const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
          //console.log(uri)

          if(uri == mongo_uri.stg){
            try {
              await client.connect();
              const database = client.db('arcusairdb'); // Replace with your database name
              const collection = database.collection(collectionName);
              const results = await collection.find(query).toArray();
              return results;
            } 
            finally {
              await client.close();
            }
          }
          else if ( uri == mongo_uri.qa){
            try {
              await client.connect();
              const database = client.db('arcusairdb_qa'); // Replace with your database name
              const collection = database.collection(collectionName);
              const results = await collection.find(query).toArray();
              return results;
            } 
            finally {
              await client.close();
            }
          }

        }
    });

      //PG_DB
      //SQL_DB

//URL
      //baseUrl: "https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6" ,
      const urls = {
        stg: "https://www.facebook.com",
        uat: "https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6",
        api: "https://melivecode.com/api"
      }
      config.baseUrl = urls[config.env.run_env]
      return config  
 
    },
    specPattern: "cypress/e2e/*.{js,jsx,ts,tsx}" ,
    defaultCommandTimeout: 10000,
  },
  viewportWidth: 1000,
  viewportHeight: 800,
  screenshotOnRunFailure: true,
  screenshotsFolder:'cypress/reports/screenshots',
  videosFolder : 'cypress/reports/video' ,
  video : true ,
  
  //Report
  // reporter: 'mochawesome',
  // reporterOptions: {
  // reportDir: 'cypress/reports',
  // reportFilename: '[name].html',
  // charts: true,
  // overwrite: true,
  // html: true,
  // json: true,
  // reportPageTitle: "Princ Test Report",
  // embeddedScreenshots: true,
  // inlineAssets: true,
  // watchForFileChanges: false
  // }

//Merge Report
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/reports/mochawesome-report',
  reportFilename: 'mochawesome_[name].html',
  charts: true,
  overwrite: true,
  html: true,
  json: true
  // reportPageTitle: "Princ Test Report",
  // embeddedScreenshots: true,
  // inlineAssets: true,
  // watchForFileChanges: false
  // chromeWebSecurity:false,
  // modifyObstructiveCode:false
}

 });
 