

const axios = require('axios');
const config = require('./config.json');

// Function to fetch location data
async function fetchLocationData(address) {
  try {
    const locationResponse = await axios.get(config.NSW_Geocoded_Addressing_Theme_API_URL, {
      params: {
        where: `address='${address.toUpperCase()}'`,
        outFields: 'housenumber',
        f: 'geojson',
      },
    });
   
    return locationResponse;
    
  } catch (error) {
    throw error;
  }
}

// Function to fetch suburb data
async function fetchSuburbData(coordinates) {
  try {

    const administrativeBoundryAPIParam = {
      geometry: `${coordinates[0]},${coordinates[1]}`,
      geometryType: 'esriGeometryPoint',
      inSR: '4326',
      spatialRel: 'esriSpatialRelIntersects',
      outFields: '*',
      returnGeometry: false,
      f: 'geoJSON',
    };

    const suburbResponse = await axios.get(`${config.NSW_Administrative_Boundaries_API_URL}/${config.SUBURB_API_SERVER}/query`, {
      params: administrativeBoundryAPIParam,
    });

    if (!suburbResponse.data.features || suburbResponse.data.features.length === 0) {
      return "N/A";              
    }
    return suburbName = suburbResponse.data.features[0].properties.suburbname;

  } catch (error) {
    throw error;
  }
}

// Function to fetch electoral district data
async function fetchElectoralDistrictData(coordinates) {
  try {
    const administrativeBoundryAPIParam = {
      geometry: `${coordinates[0]},${coordinates[1]}`,
      geometryType: 'esriGeometryPoint',
      inSR: '4326',
      spatialRel: 'esriSpatialRelIntersects',
      outFields: '*',
      returnGeometry: false,
      f: 'geoJSON',
    };

    const electoralDistrictResponse = await axios.get(`${config.NSW_Administrative_Boundaries_API_URL}/${config.DISTRICT_API_SERVER}/query`, {
      params: administrativeBoundryAPIParam,
    });
    
    if (!electoralDistrictResponse.data.features || electoralDistrictResponse.data.features.length === 0) {
      return 'N/A';
    }

    return electoralDistrictResponse.data.features[0].properties.districtname;

  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchLocationData,
  fetchSuburbData,
  fetchElectoralDistrictData,
};
