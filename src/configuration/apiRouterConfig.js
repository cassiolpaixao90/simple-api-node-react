"use strict";

import bookRouter          from "../routes/book-router";

export default function ConfigApiRoutes(app) {
    app.use("/api/book", bookRouter);
}
