//require express
const express = require("express");
//creation app (instance)
const app = express();
//require dotenv
require("dotenv").config();
//connect to database
const connectdb = require("./config/connectDB");
connectdb();
//
app.use(express.json());
//Routes
app.use("/api/contacts", require("./Routes/contact"));
//creation du server
const port = process.env.PORT;
app.listen(port, (err) =>
    err
        ? console.log(err)
        : console.log(`the server is running on port ${port}`)
);
