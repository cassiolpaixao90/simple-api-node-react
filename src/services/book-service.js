import { getBookModel }       from "../data_access/modelFactory";
import repository             from "../repositories/book-repository";
import AppExeception          from '../exceptions/exception';
import messageProperties      from "../utils/messageProperties";

exports.save = async (data) => {
  try {
    const Book  = await getBookModel();
    await repository.create(data, Book);
  }
  catch(e){
    throw new AppExeception(e.message, e.status);
  }
};

exports.getById = async (id) => {
  try {
    const Book           = await getBookModel();
    const existingBook   = await repository.getById(id, Book);
    if(!existingBook){
      throw new AppExeception(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
    }
    return existingBook;
  }
  catch(e){
    throw new AppExeception(e.message, e.status);
  }
};

exports.getAll = async () => {
  try {
    const Book   = await getBookModel();
    return await repository.getAll(Book);
  }
  catch(e){
    throw new AppExeception(e.message, e.status);
  }
};

exports.delete = async (id) => {
  try {
    const Book           = await getBookModel();
    const existingBook   = await repository.getById(id, Book);
    if(!existingBook){
      throw new AppExeception(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
    }
    await repository.delete(id, Book);
  }
  catch(e){
    throw new AppExeception(e.message, e.status);
  }
};

exports.update = async (id, data) => {
  try {
    const Book           = await getBookModel();
    const existingBook   = await repository.getById(id, Book);
    if(!existingBook){
      throw new AppExeception(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
    }
    await repository.update(id, data, Book);
  }
  catch(e){
    throw new AppExeception(e.message, e.status);
  }
};
