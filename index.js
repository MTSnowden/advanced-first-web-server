const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const { users } = require ('./state')


app.use(bodyParser.json()); 

app.get('/', (req, res) => res.send('hello world'))

app.get('/users', (req, res) => res.json(users))

// app.get('/users/1', (req, res) => res.json(users[0]))
app.get('/users/:userId', (req, res) => {
  const found = users.find(u => u._id == req.params.userId)
  return res.json(found)
})

// app.put('/users', (req, res) => {
//   const userEdit = users[0]
//   userEdit.name = 'Sally'
//   res.json(users[0])
// })

app.put('/users/:userId', (req, res) => {
  const find = users.findIndex(
    u => u._id == req.params.userId
  );
 users[find].name = "Oprah";
  return res.send('updated')
})

// this just makes the user inactive 
app.delete('/users/:userId', (req, res) => {
  const no = users.findIndex(
    u => u._id == req.params.userId
  );
  users[no].isActive = false;
  return res.send('deleted')
})

// this route will 
// find and delete the user::::::::::

// app.delete('/users/:userId', (req, res) => {
//   const no = users.findIndex(
//     u => u._id == req.params.userId
//   );
//   users.splice(no, 1);
//   return res.send('deleted')
// })

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

