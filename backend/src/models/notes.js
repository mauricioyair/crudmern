const { Schema, model } = require('mongoose')

const noteShema = new Schema({
  titulo: String,
  descripcion: {
    type: String,
    required: true,
    trim: true,    
  },  
  date: {
    type: Date,
    default: Date.now
  }
},{
  timestamps: true
})

module.exports = model('Note', noteShema)