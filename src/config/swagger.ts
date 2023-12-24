import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'ApplifyAI API',
    description: 'API for ApplifyAI'
  },
  host: 'localhost:4000'
}

const outputFile = './swaggerConfig.json'
const routes = ['../app.ts']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc)
