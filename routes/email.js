const express = require('express')
const router = express.Router();
const Email = require("../models/email");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(`./public/uploads`));
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()} - ${file.name}`
        cb(null, filename);
    }
})

router.post("/schedule-email", (req, res) => {
    const body = req.body;
    if (
      !body.emailID |
      !body.eSubject |
      !body.schTime 
    ) {
        return res.json({ "error": "parameter missing" });
    }
      return res.json({ "successfull": "Email schedule successfull" });
});

router.get('/scheduled-emails', async (req, res) => {
    const emails = await Email.find({});

});

router.get('/schedule-emails/:id', (req, res) => {
    const id = req.params.id;
    
})

router.delete('/schedule-emails/:id',)

module.exports = router;