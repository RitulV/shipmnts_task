const express = require("express");
const app = express();
require("dotenv").config();

//connection
const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URL;

mongoose.connect(DB).then(() => {
    console.log("connection successfull to MongoDB Atlas!");
}).catch((err) => console.log("error: ", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));




app.listen(PORT, () => console.log(`Server started at port ${PORT}`));