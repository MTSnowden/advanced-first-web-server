const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const state = require ('./state')


app.use(bodyParser.json()); 

app.get('/', (req, res) => res.send('hello world'))

// app.get('/users/1', (req, res) => res.json(users))

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))

