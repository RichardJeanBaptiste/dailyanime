const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
/**
 * 
 * TODO 
 */

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

    const flatValues = [];
    const placeholders = [];
    let placeholderIndex = 1;

    try {
        //console.log(req.body);
        const { quotes , character, anime, links } = req.body;
        const imgs = [links.img1, links.img2, links.img3];

        quotes.forEach((quote) => {
            //console.log(quote);
            flatValues.push(quote, character, anime, imgs);
            placeholders.push(`($${placeholderIndex++}, $${placeholderIndex++}, $${placeholderIndex++}, $${placeholderIndex++})`);
        });

        const valuesString = placeholders.join(', ');

        const insertQuery = `
            INSERT INTO quotes(quote, character, anime, img_links)
            VALUES ${valuesString}
            RETURNING id;
        `;

        const result = await db.query(insertQuery, flatValues);
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
