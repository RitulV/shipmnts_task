const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();
const emailRouter = require('./routes/email')

//connection
const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URL;

mongoose.connect(DB).then(() => {
    console.log("connection successfull to MongoDB!");
}).catch((err) => console.log("error: ", err));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use("/api", emailRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));