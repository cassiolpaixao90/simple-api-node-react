"use strict";

module.exports = {
  mongo: {
    uri: process.env.MONGOLAB_URI
  },
  server: {
    ip: process.env.IP || '',
    port: process.env.PORT || ''
  }
};
