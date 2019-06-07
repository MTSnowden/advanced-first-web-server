const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const { users } = require ('./state')


app.use(bodyParser.json()); 

app.get('/', (req, res) => res.send('hello world'))

app.get('/users', (req, res) => res.json(users))

app.get('/users/1', (req, res) => res.json(users[0]))

// app.post('/users', (req, res) => {
//   const newUser = {
//     name: 'Barrett',
//     occupation: 'Teacher',
//     age: 32
//   }
//   users.push(newUser)
//   res.json(users[users.length-1])
// })

app.put('/users', (req, res) => {
  const userEdit = users[0]
  userEdit.name = 'Sally'
  res.json(users[0])
})

app.delete('/users/1', (req, res) => {
  users.shift()
  res.send('deleted')
})

app.post('/users', (req, res) => {
  const newUser = req.body
  const counter = users.length+1
  newUser._id = counter
  console.log(newUser)
  users.push(newUser)
  res.json(newUser)

})


app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))

