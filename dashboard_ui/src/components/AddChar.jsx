import { useState } from 'react';


function AddChar() {

    const [charForm, setCharForm] = useState({
        name: '',
        anime: '',
        bio: '',
        img_links: {
            link1: '',
            link2: '',
            link3: ''
        }
    });

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
            bio: '',
            img_links: {
                link1: '',
                link2: '',
                link3: ''
            }
        })
    }

    const handleSumbit = async () => {

        const query = await fetch('http://localhost:3000/api/add_char', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(charForm)
        })

        //console.log(query);

        if(query.status == 201){
            alert("Character Added");
        } else {
            alert("Something went wrong :(");
        }   
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <h4>Add Character</h4>
            <input type='text' placeholder='name' name='name' onChange={handleFormChange} value={charForm.name}/>
            <input type='text' placeholder='anime' name='anime'onChange={handleFormChange} value={charForm.anime}/>
            <textarea name='bio' rows='4' cols='50' placeholder='Biography' onChange={handleFormChange} value={charForm.bio}></textarea>
            <div>
                <input type='text' placeholder='img1' name='link1' onChange={handleFormChange} value={charForm.img_links.link1}/>
                <input type='text' placeholder='img2' name='link2' onChange={handleFormChange} value={charForm.img_links.link2}/>
                <input type='text' placeholder='img3' name='link3' onChange={handleFormChange} value={charForm.img_links.link3}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={handleFormClear}>clear</button>
                <button onClick={handleSumbit}>submit</button>
            </div>
        </div>
    )
}


export default AddChar;