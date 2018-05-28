'use strict';
import mongoose from "mongoose";

// import AuthorSchema from '';

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  titulo: {
    type: String,
    maxLength: 200,
    required: true,
  },
  preco: {
    type: String,
    required: true
  }
  // autor: AuthorSchema

});

export { BookSchema as BookSchema };
