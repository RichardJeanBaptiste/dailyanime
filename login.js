const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.post('/', async (req, res) => {

    const passwordAttempt = req.body.password;

    const findUser = `
        SELECT * FROM admins
        WHERE username = $1
    `;

    const result = await db.query(findUser,[req.body.username]);
    
    if(result.rows.length == 0) {
        res.send("Unsuccessful Login")
    }

    const hashedPassword = result.rows[0].password;

    bcrypt.compare(passwordAttempt, hashedPassword, function(err, result) {
        if(result == true){
            res.send("Successful Login")
        } else {
            res.send("Unsuccessful Login")
        }
    })

})

module.exports = router;