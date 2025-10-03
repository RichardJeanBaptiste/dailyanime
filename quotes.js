const express = require('express')
const router = express.Router()
const db = require('./db')

/**
 * 
 *  EDIT CHARACTER ROUTE
 * 
 */

router.get('/', (req,res) => {
    res.send("Home Router")
})

router.get('/quotes', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM quotes');
        res.json(rows);
    } catch (error) {
        res.send("Sorry something went wrong on our end :( ")
    }
});

router.get('/chars/:char', async (req,res) => {
    try {
        let searchQuery = `
            SELECT * FROM characters
            WHERE name = $1;
        `;

        const { rows } = await db.query(searchQuery,[req.params.char]);

        res.json(rows[0])
    } catch (error) {
        console.error(error);
        res.send("Something went wrong ");
    }
})

router.get('/quotes/:char', async (req,res) => {

    let cString = req.params.char;

    let searchQuery = `
        SELECT quote FROM quotes
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


router.post('/add_quote', async (req, res) => {
    
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
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({message: "An error occured while trying to Add a quote to the database."});
    }
})

router.post('/add_char', async (req, res) => {

    const insertChar = `
        INSERT INTO characters(name, anime, info, img_links)
        VALUES ($1, $2, $3, $4)
        RETURNING id;
    `;

    const name = req.body.name;
    const anime = req.body.anime;
    const info = req.body.info;
    const imgs = Object.values(req.body.img_links);
    
    try {

        const result = await db.query(insertChar, [name, anime, info, imgs]);
        res.status(201).json({message: "Added character to database"});
    } catch (error) {

        if(error.message.startsWith("malformed array literal")){
            console.log(`${error.message}\nmake sure info is a string array`);
        } else if(error.message.startsWith("duplicate key value violates unique constraint")) {
            res.send("Character Already Exists");
        } else {
            console.error("Different error:", error.message);
        }  
        
        res.send("Something went wrong ")
    }
})


router.post('/delete_quote', async (req, res) => {
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



module.exports = router;
