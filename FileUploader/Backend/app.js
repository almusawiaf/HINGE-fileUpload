const express = require('express')

const app = express()


app.use('/api/files',(req, res, next)=>{
    const files = req.target.files;

    res.json(files)
})

module.exports = app; 