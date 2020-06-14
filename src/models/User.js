const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },

  senha: {
    type: String,
    require: true,
    select: false
  },

  
  passwordResetToken: {
    type: String,
    select: false
  },


  passwordResetExpires: {
    type: Date,
    select: false
  },


  fone: {
    type: String,
    require: true,
   
  },

  board: {
    type: String,
    require: true,
    
  },


  model: {
    type: String,
    require: true,

   
  },
  
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();

})


module.exports = mongoose.model('User', UserSchema);
