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

//get Ip request
app.use(requestIp.mw())

//configuracao para validacao dos campos
app.use(expressValidator());

//configuracao de rotas
apiRouteConfig(app);


export default http;
