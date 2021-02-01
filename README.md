# Artillery
Artillery is a loadTesting Solution using https://artillery.io/ and this provides a set of tools to evaluate the API's or endpoints under heavy load, simulating a real-world usage of requests and the constant consumption of the users. 

#### What is artillery?
"Artillery is a modern, powerful, easy-to-use load-testing toolkit. Artillery has a strong focus on developer happiness & ease of use, and a batteries-included philosophy. Our goal is to help developers build faster, more resilient and more scalable applications." - from [NPM](https://www.npmjs.com/package/artillery)

#### Why artillery?
A project that I was on a while back needed to have a certain amount of concurrent users that can use the application. The only problem is that you hit one endpoint on the API multiple times using data that it returns as input to the next request. This is where artillery came in to save the day as you can save sections of the response from the API in a variable to use in the subsequent request. (There will be an example API and artillery script)


## Goals 

- Give an estimate on the maximum number of concurrently active users the target system supports.
- Provide extensive documentation to improve the performance of the API and the code implemented on projects.

## Requirements 

To properly set up the System, ensure you meet the following requirements:

- [Node](https://nodejs.org/en/) 
- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [Artillery](https://artillery.io/)

## Install 
After installing NodeJS and having access to npm: 

`$ npm install -g artillery `

npm install to restore the packages specified in package.json needed by the load testing suite (here for example we added a more config).

## How to Use

If you want to check if everything if config good, you should use the command:

`$ yarn test`

If you want to make a simple loadtest, you should use the command: 

`$ yarn testApi`

If you want to make a loadtest then generate and open a Report, you should use the command: 

`$ yarn testApiWithReport`

Now if you want to start to make the loadtest for any project, you should adding the environment variable all using capitalize letters (Prod, Stage, Local, or any other). 
Example: 

`$ env=STAGE yarn loadTest`

This command generates and opens a report after complete the loadtest. 


## Documentation

## FAQ 

## Help 
If you need any help you can use the Devs or Devops channel on Slack and ask developers any question related to this project.

### Conclusion
Artillery makes it easy to create test scripts and commit them to source control. For more information on using artillery head over to their NPM repository or their website to see what else this amazing load testing tool can do.
