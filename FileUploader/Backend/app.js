const express = require('express')

const app = express()

app.post('/api/files', (req, res, next)=>{
    console.log('this is the data we got', req.body)
})

module.exports = app; 