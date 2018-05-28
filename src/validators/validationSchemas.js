"use strict";

export const bookSchema = {
  "name": {
    isLength: {
      options: [{ max: 200 }],
      errorMessage: "O nome deve ter menos de 200 caracteres"
    }
  }
}
