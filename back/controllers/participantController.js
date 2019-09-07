const mongoose = require("mongoose");
const ParticipantModel = require("../models/Participant");

exports.getAll = async (request, response, next) => {
    const participants = await ParticipantModel.find();
    response.json(participants);
}

exports.createParticipant = async (request, response, next) => {
    const participantModel = new ParticipantModel(request.body)
    const savedParticipant = await participantModel.save()
    response.json(savedParticipant);
}

exports.deleteParticipant = async (request, response, next) => {
    const deletedParticipant = await ParticipantModel.findByIdAndRemove(request.params.id);
    response.json(deletedParticipant);
}