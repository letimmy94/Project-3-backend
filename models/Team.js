const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
  coach: {
    type: String,
    required: true
  },
  players: [],
  color: '',
  record: {
    wins: 0,
    losses: 0,
    draws: 0
  }
})

mongoose.model('Team', TeamSchema)

module.exports = mongoose
