const {  mongoose, Schema } = require("mongoose");

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
    }
  
});

