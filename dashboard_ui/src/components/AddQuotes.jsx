import { useState } from 'react';
import { supabase } from '../utils';

function AddQuotes() {
    const [ currentQuote, setCurrentQuote ] = useState("")

    const [quotesToAdd, setAddQuotes] = useState([]); 

    const [quoteForm, setQuoteForm] = useState({
        character: '',
    });

    const addQuote = async () => {
        /**
         * Get CharID
         * loop through quotes
         *      create Array -> [{id: charid, quote: 'quote'}, {...}]
         */
        
        let currentId;
        let temp;
        let dataToInsert = [];

        //console.log(quoteForm.character)
        
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
    

    return (
        <div>
            <h4>Add Quote</h4>

            <div>
            <ul>
                {quotesToAdd.map((x, index) => {
                return (
                    <Quote quote={x} key={index}/>
                )
                })}
            </ul>
            </div>

            <div>
                <label htmlFor='quote'>Quote: </label>
                <input id='quote' name='quote' type='text' onChange={editCurrentQuote} value={currentQuote}/>
                <button onClick={addToQuotesArr}>Add to quotes</button>
            </div>
        
            <div>
                <label htmlFor='character'>Character: </label>
                <input id='character' name='character' type='text' onChange={editQuoteForm} value={quoteForm.character}/>
            </div>
        
            <button type='reset' onClick={clearForm}>Clear</button>
            <button type='submit' onClick={addQuote}>Submit</button>
        </div>
    )
}


export default AddQuotes;