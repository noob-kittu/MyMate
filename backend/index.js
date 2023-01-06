const express = require('express')
const connectToMongo = require('./db');
connectToMongo();


const app = express()
const port = 5000
var cors = require("cors")
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Mate backend  listening at http://localhost:${port}`)
})
