const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const teamController = require('./controllers/teams')
const userController = require('./controllers/users')
const override = require('method-override')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())
app.use(override('_method'))

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/teams', teamController)
app.use('/users', userController)

app.listen(4000, () => console.log('listening on 4000'))
