/* eslint-disable no-unused-vars */
import { useState } from 'react';

function EditChar() {
   
    const [charInfo, setCharInfo] = useState({
        name: '',
        anime: '',
        info: {},
        img_links : {
            img1: '',
            img2: '',
            img3: ''
        }
    });
    
    const [initInfo, setInitInfo] = useState({})

    const [searchChar, setSearchChar] = useState("");

    const getInfo = async () => {
        
        await fetch(`http://localhost:3000/api/chars/${searchChar}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if(data.length == 0) {
                alert("Character Not Found");
                return;
            }

            setInitInfo({
                name: data.name,
                anime: data.anime,
                info: {},
                img_links: data.img_links
            })

            setCharInfo({
                name: data.name,
                anime: data.anime,
                info: {},
                img_links: data.img_links
            })


        })
    }

    const handleInputChange = (e) => {
        setSearchChar(e.target.value);
    }

    const editCharInfo = (e) => {
        const { name, value } = e.target;
        if(name.startsWith("img")){
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
            img_links: {}
        });

        setSearchChar("");
    }

    const handleReset = () => {
        let x = {...initInfo};
        setCharInfo(x);
    }

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <h4>Edit Character</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input type='text' value={searchChar} onChange={handleInputChange}/>
                <button onClick={getInfo}>Search</button>
            </div>
            <button onClick={() => console.log(charInfo)}>Test</button>
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
                            <label htmlFor={index}>Image{index + 1}:</label>
                            <input  placeholder={x} name={index} onChange={editCharInfo}/>
                        </div>
                    ))
                ) : (
                    <div style={{display: 'flex', flexDirection: 'column' }}>
                        <p> No images available</p>

                        <label htmlFor='0'>Image1 : </label>
                        <input name='0' placeholder='Enter Img Link'/>

                        <label htmlFor='1'>Image2 : </label>
                        <input name='1' placeholder='Enter Img Link'/>

                        <label htmlFor='2'>Image3 : </label>
                        <input name='2' placeholder='Enter Img Link'/>
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