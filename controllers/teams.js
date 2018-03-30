const express = require('express')
const router = express.Router()

const Team = require('../models/Team')
// list all teams
router.get('/', (req, res) => {
  Team.find({}).then(teams => res.json(teams))
})
// create a new team
router.post('/', (req, res) => {
  Team.create(req.body).then(() => Team.find({}).then(teams => res.json(teams)))
})
// delete a team by id
router.delete('/:id', (req, res) => {
  Team.findOneAndRemove({ _id: req.params.id }).then(() =>
    Team.find({}).then(teams => res.json(teams))
  )
})
// edit a team
router.put('/:id', (req, res) => {
  Team.findOneAndUpdate({ _id: req.params.id }, req.body).then(() =>
    Team.find({}).then(teams => res.json(teams))
  )
})
// view a team
router.get('/:id', (req, res) => {
  Team.findOne({ _id: req.params.id }).then(team => {
    res.json(team)
  })
})

router.get('/edit/:id', (req, res) => {
  Team.findOne({ _id: req.params.id }).then(team => {
    res.json(team)
  })
})

module.exports = router
