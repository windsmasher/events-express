const mongoose = require("mongoose");
const config = require("../config/config");
const mockParticipant = require("./participant.json");
const ParticipantModel = require("../models/Participant");
const expect = require("chai").expect;

describe("Testing participant model", () => {

    before(async () => {
        mongoose.connect(config.test_db_uri, { useNewUrlParser: true }, () => {
            console.log("Test database connected")
        })
        await ParticipantModel.deleteMany({});
        await ParticipantModel.insertMany(mockParticipant.participants);
    })

    beforeEach(async () => {
        await ParticipantModel.deleteMany({});
        await ParticipantModel.insertMany(mockParticipant.participants);
    })

    after(async () => {
        await ParticipantModel.deleteMany({});
        await ParticipantModel.insertMany(mockParticipant.participants);
    })

    it("should get all mocked participants", async () => {
        const participants = await ParticipantModel.find();
        expect(participants).lengthOf(4);
    })

    it("should create one more participant", async () => {
        const participantModel = new ParticipantModel(mockParticipant.participants[0]);
        await participantModel.save();
        const participants = await ParticipantModel.find();
        expect(participants).lengthOf(5);
    })

    it("should delete one participant", async () => {
        const participants = await ParticipantModel.find();
        await ParticipantModel.findByIdAndRemove(participants[0]._id);
        const participantsAfterDelete = await ParticipantModel.find();
        expect(participantsAfterDelete).lengthOf(3);
    })


})