'use strict';

import {bookSchema}  from "../validators/validationSchemas";
import bookService   from "../services/book-service";
import AppExeception    from '../exceptions/exception';
import messageProperties from "../utils/messageProperties";

exports.register = async (req, res, next) => {
  try {
    req.checkBody(bookSchema);
    const errors = req.validationErrors();
    if (errors) {
      throw new AppExeception(errors, 500);
    }
    const data = req.body;
    await bookService.save(data);
    res.json({message: messageProperties.MESSAGE_SUCCESS, status: 201});
  } catch (e) {
    res.status(e.status).json({message: e.message, status: e.status});
  }
};

exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ret  = await bookService.getById(id);
    res.json({books: ret, status: 200});
  } catch (e) {
    res.status(e.status).json({message: e.message, status: e.status});
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const ret  = await bookService.getAll();
    res.json({books: ret, status: 200});
  } catch (e) {
    res.status(e.status).json({message: e.message, status: e.status});
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await bookService.delete(id);
    res.json({message: messageProperties.MESSAGE_DELETE, status: 200});
  } catch (e) {
    res.status(e.status).json({message: e.message, status: e.status});
  }
};

exports.update = async (req, res, next) => {
  try {
    const id    = req.params.id;
    const data  = req.body;
    await bookService.update(id, data);
    res.json({message: messageProperties.MESSAGE_UPDATE, status: 200});
  } catch (e) {
    res.status(e.status).json({message: e.message, status: e.status});
  }
};
