"use strict";

import cors                from "cors";
import bookRouter          from "../routes/book-router";


export default function ConfigApiRoutes(app) {
    app.use(cors())
    app.use("/api/book", bookRouter);
}
