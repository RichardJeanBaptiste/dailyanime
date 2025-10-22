import { useState } from 'react';
import { supabase } from '../utils';

function EditChar() {
   
    const [charInfo, setCharInfo] = useState({
        name: '',
        anime: '',
        biography: '',
        img_links : {
            image1: '',
            image2: '',
            image3: ''
        },
        charid: ''
    });
    
    const [initInfo, setInitInfo] = useState({})

    const [searchChar, setSearchChar] = useState("");

    const getInfo = async () => {

        //console.log(charInfo.name)
        
        const { data, error } = await supabase
            .from('characters')
            .select()
            .eq('name', searchChar)

        if(error) {
            console.log(error)
        } else {
   
            let imgs = data[0].img_links;

            let x = {}
            
            if(imgs == null) {
                x = {
                    image1: '',
                    image2: '',
                    image3: ''
                }
            } else {
                for(let i = 0; i < imgs.length; i++) {
                    let y = `image${i + 1}`
                    x={ ...x, [y]: imgs[i]}
                }
            }
            
        
            setInitInfo({
                name: data[0].name || '',
                anime: data[0].anime || '',
                biography: data[0].biography || '',
                img_links: x,
                charid: data[0].charid
            })

            setCharInfo({
                name: data[0].name || '',
                anime: data[0].anime || '',
                biography: data[0].biography || '',
                img_links: x,
                charid: data[0].charid
            })
        }

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
            biography: '',
            img_links: {},
            charid: ''
        });

        setSearchChar("");
    }

    const handleReset = () => {
        let x = {...initInfo};
        setCharInfo(x);
    }

    const handleSubmit = async () => {

        console.log(charInfo)

        const { error } = await supabase
            .from('characters')
            .update({
                name: charInfo.name,
                anime: charInfo.anime,
                biography: charInfo.biography,
                img_links: Object.values(charInfo.img_links)
            })
            .eq('charid', charInfo.charid)


        if(error) {
            console.log(error)
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

                <label htmlFor='biography'>Biography:</label>
                <textarea 
                    placeholder='Enter Bio' id="biography" name="biography" 
                    rows={4} cols={50} onChange={editCharInfo}
                    value={charInfo.biography}
                ></textarea>
            </div>

            <br/>
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