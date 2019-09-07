const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://gosc:123123q@ds233895.mlab.com:33895/events", () => {
    console.log("Database connected")
})
app.use(cors());
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.export = app;
