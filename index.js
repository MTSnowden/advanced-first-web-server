const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const { users } = require ('./state')


app.use(bodyParser.json()); 

// send hello world to the DOM
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


// find the user and replace the name 
app.put('/users/:userId', (req, res) => {
  const find = users.findIndex(
    u => u._id == req.params.userId
  );
 users[find].name = "Oprah";
  return res.send('updated')
})

// this just makes the user inactive 
// it does not delete the user from the array
app.delete('/users/:userId', (req, res) => {
  const no = users.findIndex(
    u => u._id == req.params.userId
  );
  users[no].isActive = false;
  return res.send('deleted')
})


// the route below will 
// find and delete the user from the 
// array:::::::::::::::::::::::::::

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

