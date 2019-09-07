const express = require("express");
const router = express.Router();

const participantController = require('../controllers/participantController');

router.get("/", participantController.getAll);
router.post("/", participantController.createParticipant);
router.delete("/:id", participantController.deleteParticipant)

module.exports = router;
