import { useState } from 'react'
import './App.css'

/**
 * 
 * TODO:
 *  Fix Proxy
 *  Add Multiple Quotes
 */

function App() {

  const [quoteForm, setQuoteForm] = useState({
    quote: '',
    character: '',
    anime: '',
    links: {
      img1: '',
      img2: '',
      img3: ''
    }
  });

  const [quotesToAdd, setAddQuotes] = useState([]); 

  const addQuote = async () => {
    
    const query = await fetch('http://localhost:3000/add_quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(quoteForm),
    });

    console.log(quoteForm);
    console.log(query);

    if(query.status == 201){
      alert("Quote Added");
    } else {
      alert("Something went wrong :(");
    }    
  };

  const addToQuotesArr = () => {
    let x = [...quotesToAdd];
    x.push("d");
    setAddQuotes(x);
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
    setQuoteForm({
        quote: '',
        character: '',
        anime: '',
        links: {
          img1: '',
          img2: '',
          img3: ''
        }
    })
  }

  return (
    <div>
      <div>
        <h4>Add Quote</h4>

        <div>
          <ul>
            {quotesToAdd.map((x, index) => {
              return (
                <li key={index}>
                  {x}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <label htmlFor='quote'>Quote: </label>
          <input id='quote' name='quote' type='text' onChange={editQuoteForm} value={quoteForm.quote}/>
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

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h5>Image Links</h5>
          <input name='img1' type='text' onChange={editQuoteForm} value={quoteForm.links.img1}/>
          <input name='img2' type='text' onChange={editQuoteForm} value={quoteForm.links.img2}/>
          <input name='img3' type='text' onChange={editQuoteForm} value={quoteForm.links.img3}/>
        </div>
        
        <button type='reset' onClick={clearForm}>Clear</button>
        <button type='submit' onClick={addQuote}>Submit</button>
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
