
// const AWS = require('aws-sdk');
// const lambda = new AWS.Lambda();
var locationService = require('./locationService');

exports.handler = async (event, context) => {
    try {
      
      const address = event.queryStringParameters.address;
     
      // Make HTTP requests to the APIs
       const locationResponse = await locationService.fetchLocationData(decodeURI(address));

       if (!locationResponse.data.features || locationResponse.data.features.length === 0) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Address not found' }),
        };
      }
     
      const coordinates = locationResponse.data.features[0].geometry.coordinates;
      
      const suburbName = await locationService.fetchSuburbData(coordinates);
      
     
  
      const electoralDistrictName = await locationService.fetchElectoralDistrictData(coordinates);
     
      
  
      const response = {
        statusCode: 200,
        body: {
          location: coordinates,
          suburbName: suburbName,
          electoralDistrict: electoralDistrictName,
        },
      };
  
      return response;

    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `${error}` }),
      };
    }
  };