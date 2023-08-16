const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2023

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use routes
app.use(routes)

// listen
app.listen(PORT, () => {
    console.log(`Express listening on http://localhost:${PORT}`)
})