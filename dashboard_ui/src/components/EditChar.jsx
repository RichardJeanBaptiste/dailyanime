/* eslint-disable no-unused-vars */
import { useState } from 'react';

function EditChar() {
   
    const [charInfo, setCharInfo] = useState({
        name: '',
        anime: '',
        info: {},
        biography: '',
        img_links : {
            image1: '',
            image2: '',
            image3: ''
        },
        id: ''
    });
    
    const [initInfo, setInitInfo] = useState({})

    const [searchChar, setSearchChar] = useState("");

    const getInfo = async () => {
        
        await fetch(`http://localhost:3000/api/chars/${searchChar}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {

            if(data.length == 0) {
                alert("Character Not Found");
                return;
            }
            
            let images = {
                image1: '',
                image2: '',
                image3: ''
            };

            if(data.img_links != null){
                data.img_links.forEach((link, index) => {
                    const key = `image${index + 1}`;
                    images[key] = link
                })
            }

        
            setInitInfo({
                name: data.name,
                anime: data.anime,
                info: {},
                img_links: images,
                id: data.id
            })

            setCharInfo({
                name: data.name,
                anime: data.anime,
                info: {},
                img_links: images,
                id: data.id
            })
        })
    }

    const handleInputChange = (e) => {
        setSearchChar(e.target.value);
    }

    const editCharInfo = (e) => {
        const { name, value } = e.target;
        if(name.startsWith("image")){
            setCharInfo(prevState => ({
                ...prevState,
                img_links: {
                    ...prevState.img_links,
                    [name]: value
                }
            }))
        } else {
            setCharInfo(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
        
    }

    const clearForm = () => {
        setCharInfo({
            name: '',
            anime: '',
            info: {},
            biography: '',
            img_links: {}
        });

        setSearchChar("");
    }

    const handleReset = () => {
        let x = {...initInfo};
        setCharInfo(x);
    }

    const handleSubmit = async () => {

        const mergedInfo = {
            ...initInfo,
            ...charInfo,
        }

        const query = await fetch(('http://localhost:3000/api/edit_char'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(mergedInfo),
        });


        if(query.status == 201){
            alert("Character Edited");
        } else {
            alert("Something went wrong :(");
        }  
    }

    return (
        <div>
            <h4>Edit Character</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input type='text' value={searchChar} onChange={handleInputChange}/>
                <button onClick={getInfo}>Search</button>
            </div>
            <br/>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name="name" value={charInfo.name} onChange={editCharInfo}/>

                <label htmlFor='anime'>Anime:</label>
                <input type='text' name="anime" value={charInfo.anime} onChange={editCharInfo}/>
            </div>
            
            <ul>
                {charInfo?.img_links && Object.values(charInfo.img_links).length > 0 ? (
                    Object.values(charInfo.img_links).map((x, index) => (
                        <div key={index}>
                            <label htmlFor={`image${index + 1}`}>Image{index + 1}:</label>
                            <input  placeholder={x} name={`image${index + 1}`} onChange={editCharInfo}/>
                        </div>
                    ))
                ) : (
                    <div style={{display: 'flex', flexDirection: 'column' }}>
                        <p> No images available</p>

                        <label htmlFor='image1'>Image1 : </label>
                        <input name='image1' placeholder='Enter Img Link' onChange={editCharInfo}/>

                        <label htmlFor='image2'>Image2 : </label>
                        <input name='image2' placeholder='Enter Img Link' onChange={editCharInfo}/>

                        <label htmlFor='image3'>Image3 : </label>
                        <input name='image3' placeholder='Enter Img Link' onChange={editCharInfo}/>
                    </div>   
                )}
            </ul>

            <div>
                <button onClick={handleReset}>reset</button>
                <button onClick={clearForm}>clear</button>
                <button onClick={handleSubmit}>submit</button>
            </div>
            
            
        </div>
    )
}

export default EditChar;