const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000


require('dotenv').config()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, "main.html"))
})

app.get('/view_quotes', async (req, res) => {
    res.send("Quote Page")
})

app.get('/quotes', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM quotes');
    res.json(rows);
});

app.get('/quotes/:char', async (req,res) => {

    let cString = req.params.char;

    let searchQuery = `
        SELECT quote,anime FROM quotes
        WHERE character = $1
    `;

    try {
        const { rows } = await db.query(searchQuery, [cString]);
        res.json(rows);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({message: `An error occured while trying to view query : ${cString}`});
    }
    
});


app.post('/add_quote', async (req, res) => {

    /**
     * Check If Character Exists
     *  true: get charId - Add Char & Quote 
     *  false: Add character - get charId - Add Quote
     */

    const flatValues = [];
    const placeholders = [];
    let placeholderIndex = 1;
    let currentid = ''

    const { quotes , character } = req.body;

    const searchCharacter = `
        SELECT name,id FROM characters
        WHERE name = $1;
    `;

    const insertChar = `
        INSERT INTO characters(name)
        VALUES ($1)
        RETURNING id;
    `;

    try {

        // Check if char exists
        const { rows } = await db.query(searchCharacter,[req.body.character]);

        if(rows.length > 0){
            // If char exist
            currentid = rows[0].id;
        } else {
            // Add new char, return id
            let x = await db.query(insertChar, [req.body.character]);
            currentid = x.rows[0].id
        }

        quotes.forEach((quote) => {
            flatValues.push(quote, character, currentid);
            placeholders.push(`($${placeholderIndex++}, $${placeholderIndex++}, $${placeholderIndex++})`);
        });

        const valuesString = placeholders.join(', ');

        const insertQuery = `
            INSERT INTO quotes(quote, character, charid)
            VALUES ${valuesString}
            RETURNING id;
        `;

        const result = await db.query(insertQuery, flatValues);
        //res.json(rows)
        // //const imgs = [links.img1, links.img2, links.img3];
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
