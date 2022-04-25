'use strict'

// Require modules
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Router
const router = require('./router')

// Setup 
const app = express()
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )
app.use( cors() )

router(app)

// Public dir
app.use('/public', express.static(__dirname + '/public'))

// Create server
const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
	if (!err) console.log(`Server running at PORT ${PORT}`)
})
