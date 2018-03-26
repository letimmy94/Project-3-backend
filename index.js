const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(4000, () => console.log('listing on 4000'))
