require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    api_radio_fm: process.env.VUE_APP_API_LAST_FM
  
  };
  
  module.exports = { config };
