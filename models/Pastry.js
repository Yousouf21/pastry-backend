const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')

// schema
const pastrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String    
  },
  price: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true    
  }
  
}, { timestamps: true })

// model
const pastryModel = mongoose.model('Pastry', pastrySchema)

// export
module.exports = pastryModel