// SOME EXAMPLES OF THAT YOU COULD BE IMPLEMENTED INTO YOUR LOAD TEST: GENERATE RANDOM DATA WITH FAKERS, OR INSERT IMAGE INTO A BODY. ETC 
// THIS COULD BE CHANGED DEPEND OF THE PROJECT

const fs = require('fs');
const Faker = require('faker');
const { phone } = require('faker');

module.exports = {
  setJSONBody,
  logResponse,
  logHeaders,
  generateRandomData,
}

function setJSONBody(requestParams, context, ee, next) {
  const formData = {
    Image: fs.createReadStream(__dirname + '/Image/test.png'),
  };
  requestParams.formData = Object.assign({}, requestParams.formData, formData);
  return next();
}

function logResponse(requestParams, response, context, ee, next) {
  console.log('[DEBUG] Response: ', response.body);
  return next();
}

function logHeaders(requestParams, response, context, ee, next) {
  console.log(response.headers);
  return next(); // MUST be called for the scenario to continue
}

function generateRandomData(userContext, events, done) {
  // // generate data with Faker:
  const neighborhood = Faker.address.city();
  const street = Faker.address.streetName();
  const firstName = Faker.name.firstName();
  const lastName= Faker.name.lastName();
  const email= Faker.internet.email();
  const phoneNumber = Faker.phone.phoneNumber();
  // // adding variables to virtual user's context:
  userContext.vars.neighborhood = neighborhood;
  userContext.vars.street = street;
  userContext.vars.province = 1;
  userContext.vars.phone = 8091311313;
  userContext.vars.firstName = firstName;
  userContext.vars.lastName = lastName;
  userContext.vars.email = email;
  userContext.vars.phoneNumber = phoneNumber;
  return done();
}
