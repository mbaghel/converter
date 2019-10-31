# Metric-Imperial Converter REST API

A metric-imperial conversion microservice built with Express.  
Provides a single endpoint through which users can convert weights, distances and volumes between metric and imperial.  

### Example usage
```
/api/convert?input=4gal
/api/convert?input=1/2km
/api/convert?input=5.4/3lbs
/api/convert?input=kg
```
### Example return
`{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}`
    
App was created to practice writing unit and functional tests in a working app,
as well as setting security features such as nosniff, XSS filter and Content Security Policy.

Made by [Michael Baghel](https://michaelbaghel.com/)  
Part of the [Free Code Camp](https://freecodecamp.org) curriculum

## Running locally

- Clone repo or download and unpack
- Install dependencies using npm
- If you want to see tests running make sure you set NODE_ENV environment variable to "test"
- 'npm run start' to start the server on localhost


