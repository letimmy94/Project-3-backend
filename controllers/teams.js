const express = require('express')
const router = express.Router()

const Team = require('../models/Team')
// list all teams
router.get('/', (req, res) => {
  Team.find({}).then(teams => res.json(teams))
})
// create a new team
router.post('/', (req, res) => {
  Team.create(req.body).then(teams => {
    Team.find({}).then(teams => res.json(teams))
  })
})
// delete a team by id
router.delete('/:id', (req, res) => {
  Team.findOneAndRemove({ _id: req.params.id }, req.body).then(
    res.redirect('/teams')
  )
})
// edit a team
router.put('/edit/:id', (req, res) => {
  Team.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    res.redirect(`/teams`)
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
//  add a player to a team
router.post('/:id', (req, res) => {
  Team.findOne({ _id: req.params.id }).then(team => {
    team.players.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position
    })
    team.save()
    res.redirect(`/${req.params.id}`)
  })
})

module.exports = router
