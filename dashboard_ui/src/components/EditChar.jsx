/* eslint-disable no-unused-vars */
import { useState } from 'react';

function EditChar() {
   
    const [charInfo, setCharInfo] = useState({
        name: '',
        anime: '',
        info: {},
        img_links : {}
    }); 

    const [searchChar, setSearchChar] = useState("");

    const getInfo = async () => {
        
        await fetch(`http://localhost:3000/api/chars/${searchChar}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
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
        setCharInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <h4>Edit Character</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input type='text' value={searchChar} onChange={handleInputChange}/>
                <button onClick={getInfo}>getInfo</button>
            </div>
            {/**
             *  <button onClick={() => console.log(charInfo)}>Test</button>
             */}
            
            <br/>
            <input type='text' name="name" value={charInfo.name} onChange={editCharInfo}/>
            <input type='text' name="anime" value={charInfo.anime} onChange={editCharInfo}/>
            <p>{charInfo.anime}</p>
            <ul>
                {charInfo?.img_links && Object.values(charInfo.img_links).length > 0 ? (
                    Object.values(charInfo.img_links).map((x, index) => (
                        <li key={index}>{x}</li>
                    ))
                ) : (
                    <li>No images available</li>
                )}
            </ul>
            
            
        </div>
    )
}

export default EditChar;