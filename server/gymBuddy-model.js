const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gymBuddySchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  saying: String
});

const gymBuddy = mongoose.model('gymBuddy', gymBuddySchema);
module.exports = gymBuddy;
