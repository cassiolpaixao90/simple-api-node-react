"use strict";

import connectionProvider       from "./connectionProvider";
import config                   from "../../settings/environment";
import {BookSchema}             from "../models/book";

export const getBookModel = async  () => {
  try {
    const conn = await connectionProvider( config.mongo.uri );
    return conn.model("BookSchema", BookSchema);
  } catch (err) {
    throw err;
  }
};
