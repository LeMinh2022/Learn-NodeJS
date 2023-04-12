const express = require("express")
const router = express.Router();
const {getHomePage,getAbc,getAc} = require('../controllers/homeController')


router.get('/', getHomePage)

router.get('/abc', getAbc )

router.get('/ac', getAc)

module.exports = router;