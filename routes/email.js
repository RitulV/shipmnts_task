const express = require('express')
const router = express.Router();
const { handleEmailSchedule } = require("../controllers/EmailSchedule");

router.post("/schedule-email", handleEmailSchedule);

router.get('/scheduled-emails',);

router.get('/schedule-emails/:id',)

router.delete('/schedule-emails/:id',)

module.exports = router;