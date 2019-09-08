const chai = require("chai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const participantRoutes = require("../routes/participantRoutes");
const chaiHttp = require("chai-http");
const should = chai.should();
const mockParticipant = require("./participant.json");
const config = require("../config/config")
const mongoose = require("mongoose");
const ParticipantModel = require("../models/Participant");
const expect = require("chai").expect;

chai.use(chaiHttp);


describe("controller in participants", () => {

    const app = express();

    before(() => {
        mongoose.connect(config.test_db_uri, { useNewUrlParser: true }, () => {
            console.log("Tested database connected")
        })
        app.use(cors());
        app.use(bodyParser.json());
        app.use("/participant", participantRoutes)
        app.listen(config.port_test, () => {
            console.log(`Listening on port ${config.port_test}`)
        })
    })

    beforeEach(async () => {
        await ParticipantModel.deleteMany({});
        await ParticipantModel.insertMany(mockParticipant.participants);
    })

    after(async () => {
        await ParticipantModel.deleteMany({});
        await ParticipantModel.insertMany(mockParticipant.participants);
    })

    it("should GET all the participants", done => {
        chai.request(app).get("/participant").end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a("array");
            response.body.length.should.be.eql(4);
            done();
        })
    })

    it("should POST one participant", done => {
        chai.request(app).post("/participant").send(mockParticipant.participants[0]).end((error, response) => {
            response.should.have.status(200);
            response.should.be.a("object");
            response.body.should.have.property("firstName");
            response.body.should.have.property("lastName");
            response.body.should.have.property("email");
            response.body.should.have.property("eventDate");
            done();
        })
    })

    it("should DELETE one participant", async () => {
        const participants = await ParticipantModel.find();
        const participantId = participants[0]._id;
        chai.request(app).delete(`/participant/${participantId}`).end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('_id');
        })
    })

})