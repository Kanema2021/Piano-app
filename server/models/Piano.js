const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PianoSchema = new Schema({
  id: {
    type: Object,
  },
});

const User = mongoose.model("Piano", PianoSchema);

module.exports = User;