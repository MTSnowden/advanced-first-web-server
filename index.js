const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/users', (req, res) => res.json(users))

app.get('/users/1', (req, res) => res.json(users))

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))
