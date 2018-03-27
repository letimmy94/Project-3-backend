const mongoose = require('mongoose')

const CoachSchema = new mongoose.Schema({
  firstName: '',
  lastName: '',
  rating: 0
})

const PlayerSchema = new mongoose.Schema({
  firstName: '',
  lastName: '',
  rating: 0,
  number: 0,
  position: ''
})

const TeamSchema = new mongoose.Schema({
  coach: CoachSchema,
  players: [PlayerSchema],
  color: '',
  record: {
    wins: 0,
    losses: 0,
    draws: 0
  }
})

mongoose.model('Team', TeamSchema)

module.exports = mongoose
