import { useState } from 'react';
import { supabase } from '../utils';

function EditChar() {
   
    const [charInfo, setCharInfo] = useState({
        name: '',
        anime: '',
        biography: '',
        wiki: '',
        img_links : [],
        charid: ''
    });
    
    const [initInfo, setInitInfo] = useState({})

    const [searchChar, setSearchChar] = useState("");

    const [newImgLink, setNewImgLink] = useState("");

    const getInfo = async () => {
        
        const { data, error } = await supabase
            .from('characters')
            .select()
            .eq('name', searchChar)

        if(error) {
            console.log(error)
        } else {

            console.log(data)

            if(data.length == 0) {
                alert(`${searchChar} - Not Found `)
            } else {
                setInitInfo({
                    name: data[0].name || '',
                    anime: data[0].anime || '',
                    wiki: data[0].wiki || '',
                    biography: data[0].biography || '',
                    img_links: data[0].img_links || [],
                    charid: data[0].charid
                })

                setCharInfo({
                    name: data[0].name || '',
                    anime: data[0].anime || '',
                    wiki: data[0].wiki || '',
                    biography: data[0].biography || '',
                    img_links: data[0].img_links || [],
                    charid: data[0].charid
                })
            }
        }
    }

    const handleInputChange = (e) => {
        setSearchChar(e.target.value);
    }

    const handleImgChange = (e) => {
        setNewImgLink(e.target.value);
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


    const ImgItem = ({img_link, index}) => {

        const removeFromImgs = () => {
            let x = charInfo.img_links.filter((x) => x !== img_link)

            setCharInfo(prevState => ({
                ...prevState,
                img_links: x,
            }))
        }

        return (
            <li style={{ display: 'flex', flexDirection: 'row' }} key={index}>
                <p style={{ width: '40%', textOverflow:'ellipsis', overflow: 'hidden', whiteSpace:'nowrap' }}>{img_link}</p>
                <img
                    src={img_link}
                    width="100"
                    height="100"
                    referrerPolicy="no-referrer"
                />
                <button onClick={removeFromImgs}>x</button>
            </li>
        )
    }

    const addNewImg = () => {
        let x = [...charInfo.img_links];
        x.push(newImgLink);

        setCharInfo(prevState => ({
            ...prevState,
            img_links: x,
        }))

        setNewImgLink("");
    }

    const clearForm = () => {
        setCharInfo({
            name: '',
            anime: '',
            biography: '',
            wiki: '',
            img_links: [],
            charid: ''
        });

        setSearchChar("");
        setNewImgLink("");
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
                wiki: charInfo.wiki,
                biography: charInfo.biography,
                img_links: charInfo.img_links
            })
            .eq('charid', charInfo.charid)

        if(error) {
            console.log(error)
            alert("Editing Failed");
        }

        alert(`${searchChar}: info edited`);
        clearForm();
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

                <label htmlFor='wiki'>Wiki:</label>
                <input type='text' name="wiki" value={charInfo.wiki} onChange={editCharInfo}/>

                <label htmlFor='biography'>Biography:</label>
                <textarea 
                    placeholder='Enter Bio' id="biography" name="biography" 
                    rows={4} cols={50} onChange={editCharInfo}
                    value={charInfo.biography}
                ></textarea>
            </div>

            <br/>
            <h4>Images</h4>
            <input type='text' name='imgLinkInput' placeholder='Enter Image Link' value={newImgLink} onChange={handleImgChange}/>
            <button onClick={addNewImg}>Add Image</button>
            <ul style={{ width: '70%' }}>
                {charInfo.img_links.map((x, index) => {
                    return (
                        <ImgItem key={index} img_link={x}/>
                    )
                })}
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