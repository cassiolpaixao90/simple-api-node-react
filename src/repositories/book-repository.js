'use strict';
import AppException        from '../exceptions/exception';

exports.create = async (data, Book) => {

  try {
    const Book = new Book(data);
    await Book.save();
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
