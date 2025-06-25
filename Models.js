const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const form = new Schema({
 fullname: {
    type: String,
    required: true,
  },
  numberOrEmail: {
    type: String,
    required:true
  },
  description: {
    type:String,
    required:true
  }
});
// Create the model from the schema and export it
const User = mongoose.model('formData', form);
module.exports = {
  User
};