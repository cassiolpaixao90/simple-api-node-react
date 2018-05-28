"use strict";
/* eslint-disable no-console */

import express, { Router }    from "express";
import bodyParser             from "body-parser";
import expressValidator       from "express-validator";
import apiRouteConfig         from "./configuration/apiRouterConfig";

const app = express();
const http = require("http").Server(app);

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

//configuracao para validacao dos campos
app.use(expressValidator());

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000  ');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//configuracao de rotas
apiRouteConfig(app);

export default http;
