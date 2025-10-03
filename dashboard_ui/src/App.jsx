import { useState } from 'react'
import AddChar from './components/AddChar';
import EditChar from './components/EditChar';
import './App.css'

/**
 * 
 * TODO:
 *  Fix Proxy
 */

function App() {

  const [ currentQuote, setCurrentQuote ] = useState("")

  const [quotesToAdd, setAddQuotes] = useState([]); 

  const [quoteForm, setQuoteForm] = useState({
    character: '',
    anime: '',
  });

  const addQuote = async () => {

    let x = {
      quotes: quotesToAdd,
      ...quoteForm,
    }
    
    const query = await fetch('http://localhost:3000/api/add_quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(x),
    });

    console.log(quoteForm);
    console.log(query);

    if(query.status == 201){
      alert("Quote Added");
    } else {
      alert("Something went wrong :(");
    }    
  };

  const editCurrentQuote = (e) => {
    setCurrentQuote(e.target.value);
  }

  const addToQuotesArr = () => {
    let x = [...quotesToAdd];
    x.push(currentQuote);
    setAddQuotes(x);
    setCurrentQuote("");
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
        anime: '',
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

        <div>
          <label htmlFor='anime'>Anime: </label>
          <input id='anime' name='anime' type='text' onChange={editQuoteForm} value={quoteForm.anime}/>
        </div>
        
        <button type='reset' onClick={clearForm}>Clear</button>
        <button type='submit' onClick={addQuote}>Submit</button>
      </div>

      <div>
        <AddChar/>
      </div>

      <div>
        <EditChar/>  
      </div>

      <div>
        View Quotes
      </div>

      <div>
        Delete Quote
      </div>

      <div>
        Search Quotes
      </div>
    </div>
  )
}

export default App
