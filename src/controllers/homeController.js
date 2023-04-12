const getHomePage = (req,res) => {
    res.send('Hello World! and nodemon')
}

const getAbc = (req, res) => {
    res.render('sample.ejs')
}

const getAc = (req, res) => {
    res.send('<h1>test anh em </h1>')
}

module.exports ={
    getHomePage,
    getAbc,
    getAc
}