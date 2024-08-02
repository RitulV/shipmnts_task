const {  mongoose, Schema, model } = require("mongoose");

const emailSchema = new Schema({
  emailID: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: stringify,
    required: false,
  },
  schTime: {
    type: Date,
    required: true,
  },
  attcURL: {
    type: String,
    required: false,
  },
});

const Email = new model("email", emailSchema);

module.exports = Email;