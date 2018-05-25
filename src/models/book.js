'use strict';
import mongoose  from "mongoose";

const Schema     = mongoose.Schema;
const BookSchema = new Schema({
  nome: {
    type:       String,
    maxLength:  200,
    required:   true,
  }

});

export {BookSchema as BookSchema};
