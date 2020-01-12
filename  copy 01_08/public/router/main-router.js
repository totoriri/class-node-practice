const express = require('express');
const path =require('path')

const router = express.Router();

router.get('/', (res, req, next) => {
    
    res.sendFile(path.join(__dirname,'views','home.html'))
})


module.exports = router;