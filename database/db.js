
//Stack Overflow CP
const mongoose  = require('mongoose')

const db_url = "mongodb://localhost:27017/urlshortener"

mongoose.connect(db_url,{
    useNewUrlParser : true,
    useUnifiedTopology :true
})
const connection = mongoose.connection

module.exports = connection