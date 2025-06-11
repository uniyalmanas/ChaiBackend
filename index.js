const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

// Route: Home
app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/login',(req,res)=>{
    res.send(' <h1>login page</h1> ')
})

const githubdata = {
  "username": "uniyalmanas",
  "email": "uniyalmanas@gmail.com",
  "sshKeyType": "ed25519",
  "sshKeyPath": "~/.ssh/id_ed25519",
  "repository": {
    "name": "ChaiBackend",
    "url": "git@github.com:uniyalmanas/ChaiBackend.git",
    "branch": "main",
    "remote": "origin"
  },
  "lastCommit": {
    "message": "Initial commit",
    "date": "2025-06-11",
    "author": "Manas Uniyal"
  }
}


app.get('/github',(req,res)=>{
 res.json(githubdata)
})
// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${port}`)
})

// console.log('this is port : ',process.env.PORT) 



 










