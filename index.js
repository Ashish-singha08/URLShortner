const express = require("express")
const app = express()

// Database config....
const connection = require('./database/db')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routing....
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('./routes/get'))
app.use('/api/url', require('./routes/post'))

//Listing.. ...
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))