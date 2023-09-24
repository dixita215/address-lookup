const lambdaFunctionName = require('./index.js');

// const AWS = require('aws-sdk');
// const lambda = new AWS.Lambda({ region: 'us-east-1' }); // Replace with your AWS region

const data = require('./data.json'); // Load your test event data

// const params = {
//    FunctionName: lambdaFunctionName,
//    Payload: JSON.stringify(data),
// };

const context = {};

lambdaFunctionName.handler(data, context).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

// lambda.invoke(params, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Lambda Function Response:', data.Payload);
//   }
// });
