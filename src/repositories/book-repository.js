'use strict';
import AppException        from '../exceptions/exception';
import { getBookModel } from "../data_access/modelFactory";

exports.create = async (data) => {

  try {
    const Book  = await getBookModel();
    const book = new Book(data);
    await book.save();
  } catch (error) {
    throw new AppException(error);
  }
};

exports.getById = async (id, Book) => {
  try {
    return await Book.findById(id);
  } catch (error) {
    throw new AppException(error);
  }
};

exports.getAll = async (Book) => {
  try {
    return await Book.find();
  } catch (error) {
    throw new AppException(error);
  }
};
exports.delete = async (id, Book) => {
  try {
    await Book.remove({'_id': id});
  } catch (error) {
    throw new AppException(error);
  }
};
exports.update = async (id, data, Book) => {
  try {
    await Book.findByIdAndUpdate(id, data);
  } catch (error) {
    throw new AppException(error);
  }
};
