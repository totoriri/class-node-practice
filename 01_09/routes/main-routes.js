const express = require('express');
const fs = require('fs');

const router = express.Router();

const data = [];

router.get('/', (req, res, next) => {
    res.render('index', {notes: data});
})

router.post('/note', (req, res, next) => {
    data.push(req.body);

    fs.writeFile('notes.txt', JSON.stringify(data), () => {
        res.status(302);
        res.redirect('/');
    });
})



module.exports = router;