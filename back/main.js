const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config/config');
const PORT = process.env.PORT || config.port;
const participantRoutes = require("./routes/participantRoutes");
const bodyParser = require("body-parser")

mongoose.connect(config.db_uri, { useNewUrlParser: true }, () => {
    console.log("Database connected")
})
app.use(cors());
app.use(bodyParser.json());
app.use("/participant", participantRoutes)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.export = app;
