# Address-lookup
Node.js function written to retrieve location, suburb name, and electoral district name using the API.The function takes an address as input and returns the data in a JSON response.

# Project Structure
The project follows below file structure:

* config.json: Configuration file for storing configurable fields.
* data.json: Sample input data for testing purposes.
* index.js: The main Lambda function code.
* locationService.js: A file responsible for communicating with the NSW_Geocoded_Addressing_Theme and NSW_Administrative_Boundaries_Theme APIs.
* package-lock.json: Lockfile for Node.js package dependencies.
* package.json: Project metadata and dependencies configuration.
* test.js: Use this file to test the function locally.

# Version
Node.js v18.18.0

# Testing
* To test the Lambda function locally use test.js file.

  - git clone git@github.com:dixita215/address-lookup.git
  - cd address-lookup-main
  - npm install
  - node test.js

* AWS Lamda function URL for testing
  
   https://qk22dmskv55odxa7w4h4mpng3q0ddhkj.lambda-url.ap-southeast-2.on.aws/?address=175+FIRST+AVENUE+FIVE+DOCK

