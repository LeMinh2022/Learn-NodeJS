const express = require('express')
const app = express()

//support env run
require('dotenv').config() 

// call PORT and HOST_NAME in env
const port = process.env.PORT || 8888; 
const hostname = process.env.HOST_NAME;



var path = require('path');

//config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

app.get('/ac', (req, res) => {
  res.send('<h1>test anh em </h1>')
})
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})