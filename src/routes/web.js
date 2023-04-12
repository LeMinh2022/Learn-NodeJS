const express = require("express")
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World! and nodemon')
})

router.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

router.get('/ac', (req, res) => {
  res.send('<h1>test anh em </h1>')
})

module.exports = router;