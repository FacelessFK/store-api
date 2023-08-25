require("dotenv").config();
// async Error

const express = require("express");
const app = express();

app.use((req, res) => {
    res.send("test");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
});
