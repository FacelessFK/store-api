require("dotenv").config();
// async Error
require("express-async-errors");

const express = require("express");
const app = express();

const mongoCon = require("./db/connection");

const productsRt = require("./routes/products");

const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send('<a href="/api/v1/products">hello</a>');
});

app.use("/api/v1/products", productsRt);

// products route
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoCon(
            process.env.MONGO_URI,
            console.log("database connected ...")
        );
        app.listen(port, console.log(`server is listening to port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};
start();
