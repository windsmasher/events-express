const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const participantRoutes = require("./routes/participantRoutes");
const bodyParser = require("body-parser")

mongoose.connect("mongodb://gosc:123123q@ds233895.mlab.com:33895/events", { useNewUrlParser: true }, () => {
    console.log("Database connected")
})
app.use(bodyParser.json());
app.use("/participant", participantRoutes)
app.use(cors());
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.export = app;
