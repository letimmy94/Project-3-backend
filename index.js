const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const teamController = require('./controllers/teams')
const userController = require('./controllers/users')
const override = require('method-override')
const passport = require('./config/passport')()

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())
app.use(override('_method'))
app.use(passport.initialize())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/teams', teamController)
app.use('/users', userController)

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
