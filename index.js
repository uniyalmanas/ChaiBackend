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

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${port}`)
})

// console.log('this is port : ',process.env.PORT) 



 










