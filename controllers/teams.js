const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')

const Team = mongoose.model('Team')

router.get('/', (req, res) => {
  Team.find({}).then(teams => res.json(teams))
})

router.post('/', (req, res) => {
  Team.create(req.body).then(teams => {
    Team.find({}).then(teams => res.json(teams))
  })
})

module.exports = router
