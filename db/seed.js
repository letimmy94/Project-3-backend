const mongoose = require('./connection')
const seeds = require('./seeds.json')

const Team = mongoose.model('Team')

mongoose.Promise = Promise

Team.remove({}).then(team => {
  Team.collection.insert(seeds).then(teams => {
    console.log(teams)
    mongoose.connection.close()
  })
})
