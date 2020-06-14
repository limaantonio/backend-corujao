const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SensorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },


  local: {
    type: String,
    require: true,
   
  },

  connected: {
    type: Boolean,
    require: true,
    
  },

  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    require: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now()
  }

});


module.exports = mongoose.model('Sensor', SensorSchema);
