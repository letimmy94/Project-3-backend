const mongoose = require('../models/Team')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/soccer-teams')

module.exports = mongoose
