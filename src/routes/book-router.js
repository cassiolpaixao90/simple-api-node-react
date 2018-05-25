'use strict';

import {Router}                           from "express";
import controller                         from "../controllers/book-controller";
const bookRouter =  Router();

bookRouter.post('/register', controller.register);
bookRouter.get('/getbyId/:id', controller.getById);
bookRouter.get('/getall', controller.getAll);
bookRouter.delete('/delete/:id', controller.delete);
bookRouter.put('/update/:id', controller.update);

export default bookRouter;
