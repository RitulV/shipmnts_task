const {  mongoose, Schema, model } = require("mongoose");

const emailSchema = new Schema({
  emailID: {
    type: String,
    required: true,
  },
  eSubject: {
    type: String,
    required: true,
  },
  eBody: {
    type: String,
    required: false,
  },
  schTime: {
    type: String,
    required: true,
  },
  attcURL: {
    type: String,
    required: false,
  },
});

const Email = model("emails", emailSchema);

module.exports = Email;