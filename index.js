const express = require('express')
const app = express()
const db = require('./db')
const path = require('path')
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

    const insertQuery = `
        INSERT INTO quotes(quote, character, anime)
        VALUES ($1, $2, $3)
        RETURNING id;
    `;

    try {
        const { quote , character, anime, links } = req.body;
        const result = await db.query(insertQuery, [quote, character, anime]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({message: "An error occured while trying to Add a quote to the database."});
    }
})

app.post('/delete_quote', async (req, res) => {
    const deleteQuery = `
        DELETE FROM quotes
        WHERE quote = $1
    `;

    try {
        const result = await db.query(deleteQuery, [req.body.quote]);

        if(result.rowCount > 0){
            res.status(200).json({message : "Quote deleted successfully."});
        } else {
            res.status(404).json({message: "Quote not found."});
        }
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({message: "An error occurred while trying to delete a query"});
    }
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})
