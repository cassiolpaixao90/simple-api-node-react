'use strict';
import mongoose from "mongoose";

// import AuthorSchema from '';

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  name: {
    type: String,
    maxLength: 200,
    required: true,
  }
});

export { BookSchema as BookSchema };
