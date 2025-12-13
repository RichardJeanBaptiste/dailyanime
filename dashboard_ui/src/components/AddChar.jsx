import { useState } from 'react';
import { supabase } from '../utils';


function AddChar() {

    const [charForm, setCharForm] = useState({
        name: '',
        anime: '',
        biography: '',
        wiki: '',
        img_links: {
            link1: '',
            link2: '',
            link3: ''
        }
    });

    const [ imgs, setImgs ] = useState([]);

    const [ imgValue,  setImageValue ] = useState("");

    const addImgs = (img_link) => {
        let x = [...imgs];

        x.push(img_link)

        setImgs(x)
        setImageValue("")
    } 
    
    const handleImgValue = (e) => {
        setImageValue(e.target.value);
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;

        if(name.startsWith('link')) {
            setCharForm(prevState => ({
                ...prevState,
                img_links: {
                ...prevState.img_links,
                [name]: value
                }
            }))
        } else {
            setCharForm(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const handleFormClear = () => {
        setCharForm({
            name: '',
            anime: '',
            biography: '',
            wiki: '',
            img_links: {
                link1: '',
                link2: '',
                link3: ''
            }
        })

        setImgs([]);
    }

    const handleSumbit = async () => {
  
        let x = {
            name: charForm.name,
            anime: charForm.anime,
            biography: charForm.biography,
            wiki: charForm.wiki,
            img_links:  imgs //Object.values(charForm.img_links)
        }
        //console.log(imgs)

        const { data, error } = await supabase
            .from('characters')
            .insert(x)
            .select()

        if(error) {
            console.log(error)
            alert("Something went wrong adding character")
        } else {
            console.log(data);
            alert("Character Added");
            handleFormClear();
        }
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'row' , width: '100%', height: '15%'}}>
          
            <div style={{ display: 'flex', flexDirection: 'column' , width: '50%'}}>
                <h4>Add Character</h4>
                <input type='text' placeholder='name' name='name' onChange={handleFormChange} value={charForm.name}/>
                <input type='text' placeholder='anime' name='anime'onChange={handleFormChange} value={charForm.anime}/>
                <input type='text' placeholder='wiki' name='wiki' onChange={handleFormChange} value={charForm.wiki}/>
                <textarea name='biography' rows='4' cols='50' placeholder='Biography' onChange={handleFormChange} value={charForm.biography}></textarea>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button onClick={handleFormClear}>clear</button>
                    <button onClick={handleSumbit}>submit</button>
                </div>
            </div>

            
            
            <div style={{ display: 'flex', flexDirection: 'column',  width: '40%', marginLeft: '3%' }}>

                <div>
                    <input type='text' placeholder='image link' name='imgValue' onChange={handleImgValue} value={imgValue}/>
                    <button onClick={() => addImgs(imgValue)}>Add Image</button>
                </div>
                
                <div style={{height: '50%', overflowY: 'scroll'}}>
                    {imgs.map((x, index) => {
                        return (
                            <p key={index}>{x}</p>
                        )
                    })}
                </div>
            </div> 
        </div>
    )
}


export default AddChar;