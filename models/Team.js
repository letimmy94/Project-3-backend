const mongoose = require('../db/connection')

const CaptainSchema = new mongoose.Schema({
  firstName: '',
  lastName: '',
  position: '',
  email: ''
})

const PlayerSchema = new mongoose.Schema({
  firstName: '',
  lastName: '',
  position: ''
})

const TeamSchema = new mongoose.Schema({
  name: '',
  captain: CaptainSchema,
  players: [PlayerSchema],
  color: '',
  record: {
    type: Object,
    default: {
      wins: 0,
      losses: 0,
      draws: 0
    }
  }
})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team
