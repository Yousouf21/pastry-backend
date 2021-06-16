const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Pastry = require('./../models/Pastry')

// GET- get all pastries ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Pastry.find().populate('user', '_id firstName lastName')
    .then(pastries => {
      if(pastries == null){
        return res.status(404).json({
          message: "No pastries found"
        })
      }
      res.json(pastries)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting pastries"
      })
    })  
})

// export
module.exports = router