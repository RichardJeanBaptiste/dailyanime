const express = require('express')
const app = express()
const db = require('./db')
const path = require("path")
const bodyParser = require('body-parser')
const port = 3000


require('dotenv').config()

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, "main.html"))
})

app.get('/test', async (req,res) => {
    const { rows } = await db.query('SELECT * FROM test');
    res.json(rows);
})

app.post('/add_quote', async (req, res) => {
    const sqlQuery = `
        INSERT INTO quotes(quote, character, anime)
        VALUES ($1, $2, $3)
        RETURNING id;
    `;

    const { quote , character, anime } = req.body;
    const result = await db.query(sqlQuery, [quote, character, anime]);
    res.status(201).json(result.rows[0]);
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})
