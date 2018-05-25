"use strict";

import indexRouter         from "../routes/index-route";
import bookRouter          from "../routes/book-route";

export default function ConfigApiRoutes(app) {
    app.use("/", indexRouter);
    app.use("/api/book", bookRouter);
}
