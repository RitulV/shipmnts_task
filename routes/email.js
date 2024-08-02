const express = require("express");
const router = express.Router();
const Email = require("../models/email");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()} - ${file.name}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

router.post("/schedule-email", (req, res) => {
    const body = req.body;

    if (!body.emailID || !body.eSubject || !body.schTime) {
        return res.status(400).json({ error: "parameter missing" });
    }

    const newEmail = Email.create({
      emailID: body.emailID,
      eSubject: body.eSubject,
      eBody: body.eBody,
      schTime: body.schTime,
      attcURL: `upload/`
    });

    return res.json({ successfull: "Email schedule successfull", "id":newEmail.id });
});

router.get("/scheduled-emails", async (req, res) => {
    const emails = await Email.find({});

    return res.json(emails);
});

router.get("/schedule-emails/:id", async (req, res) => {
    const id = req.params.id;
    const email = await Email.findById(id);

    if (!email) {
        res.status(404).json({ Error: "Email not found" });
    }

    res.status(200).json(email);
});

router.delete("/schedule-emails/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedEmail = await Email.findByIdAndDelete(id);

        if (!deletedEmail) {
            return res.json({
            Error: "Email id not found",
            });
        }

        return res.json({ success: "Email deleted", email: deletedEmail });
    } catch (error) {
        return res.json({ status: "error", message: "Error encountered in deleting email" });
    }
    
});

module.exports = router;
