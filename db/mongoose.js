const mongoose = require('mongoose')

mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})