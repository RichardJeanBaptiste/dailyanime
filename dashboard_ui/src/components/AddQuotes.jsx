import { useState } from 'react';
import { supabase } from '../utils';
import { Box, Typography, TextField, Button } from '@mui/material';

function AddQuotes() {
    const [ currentQuote, setCurrentQuote ] = useState({
        character: '',
        anime: '',
        quote: ''
    });

    const [quotesToAdd, setAddQuotes] = useState([]); 

    const handleInputs = (e, field) => {

        setCurrentQuote((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    }

    const clearQuote = () => {
        setCurrentQuote({
            character: '',
            anime: '',
            quote: ''
        })
    }

    const addToQuotes = () => {
        setAddQuotes((prev) => [
            ...prev,
            {
                character: currentQuote.character,
                anime: currentQuote.anime,
                quote: currentQuote.quote
            }
        ]);

        setCurrentQuote({
            character: '',
            anime: '',
            quote: ''
        });

    };

    return (
        <Box sx={{ width:'100%', height: '100%' }}>

            <Typography variant='h4'>Add Quote</Typography>

            <Box sx={{ marginTop: '2%', marginLeft: '2%' , width: '90%', borderStyle: 'solid', borderWidth: '.5px', borderBlockColor: 'lightgrey', borderRadius: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' , gap: 5, marginTop: '2%', marginLeft: '2%', width: '90%'}}>
                    <TextField variant='outlined' label="Character" onChange={(e) => handleInputs(e,'character')} value={currentQuote.character}/>
                    <TextField variant='outlined' label="Anime" onChange={(e) => handleInputs(e ,'anime')} value={currentQuote.anime}/>
                    <TextField variant='outlined' label="Quote" onChange={(e) => handleInputs(e, 'quote')} value={currentQuote.quote}/>
                </Box>
                

                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                    <Button variant="text" onClick={clearQuote}>Clear</Button>
                    <Button variant="text" onClick={addToQuotes}>Add</Button>
                    <Button variant="text" onClick={() => console.log(quotesToAdd)}>Test</Button>
                </Box>
            </Box>

            {/*************** Preview ****************************/}

            <Box sx={{ width: '100%', height: '50%', overflowY: 'scroll', marginTop: '2%' }}>

                {/************************ Color Codes ******************************/}
                <Box>

                </Box>

                {/*********************** Preview Header ****************************/}
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '90%', height: '10%', backgroundColor: 'lightgray', marginLeft: '2%', borderStyle: 'solid', borderColor: 'black', borderWidth: '.5px'}}>
                    <Box sx={{ borderRightStyle: 'solid', borderRightColor: 'whitesmoke', borderRightWidth: '.2px', width: '45%', marginLeft: '.5%' }}>
                        <Typography sx={{ color: 'darkgrey' }}>Quote</Typography>
                    </Box>
                    
                    <p>Character</p>
                    <p>Anime</p>
                    <p>Check</p>
                </Box>
            </Box>

        </Box>
    )
}


export default AddQuotes;


/**
 * 
 * 
    const addQuote = async () => {
 
        let currentId;
        let temp;
        let dataToInsert = [];
        
        const { data, error } = await supabase
            .from('characters')
            .select()
            .eq('name', quoteForm.character)
        
        if(error) {
            console.log(error);
        } else {
            currentId = data[0].charid;
            console.log(data)
        }

        for(let i = 0; i < quotesToAdd.length; i++){
            temp = {character: quoteForm.character, quote: quotesToAdd[i], charid: currentId}
            dataToInsert.push(temp)
        }

        const { insertError } = await supabase
            .from('quotes')
            .insert(dataToInsert)

        if(insertError) {
            console.log(insertError)
            alert("Something went wrong adding quotes")
        } else {
            alert("Quotes Added");
            clearForm();
        }
        
    };

    const addToQuotesArr = () => {
        let x = [...quotesToAdd];
        x.push(currentQuote);
        setAddQuotes(x);
        setCurrentQuote("");
    }


    const editCurrentQuote = (e) => {
        setCurrentQuote(e.target.value);
    }


    const editQuoteForm = (e) => {
        const { name, value } = e.target;

        if(name.startsWith('img')) {
            setQuoteForm(prevState => ({
                ...prevState,
                links: {
                ...prevState.links,
                [name]: value
                }
            }))
        } else {
            setQuoteForm(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const clearForm = () => {
        setCurrentQuote("");
        setAddQuotes([]);
        setQuoteForm({
            character: '',
        })
    }

    const removeQuote = (quoteToDelete) => {
        let x = [...quotesToAdd];

        let result = x.filter((quote) => { return quote != quoteToDelete });

        setAddQuotes(result);
    }

    const Quote = ({quote}) => {
        return (
            <li>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                {quote}
                <button onClick={() => removeQuote(quote)}>x</button>
                </div>
            </li>
        )
    }
    
 * 
 * 
 * 
 * 
 */

