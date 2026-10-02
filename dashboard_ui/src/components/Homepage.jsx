import { useEffect, useState } from "react";
import AddChar from "./AddChar";
import AddQuotes from "./AddQuotes";
import EditChar from "./EditChar";
import { supabase } from "../utils";
import { useNavigate } from "react-router";
import './Homepage.css';
import NavBar from "./NavBar";
import Box from '@mui/material/Box';


function Homepage(){

    let navigate = useNavigate();

    const [ index, setIndex ] = useState(0);

    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session)

            if( event === 'SIGNED_OUT') {
                navigate('/')
            } else if( event === 'INITIAL_SESSION') {
                if(session == null) {
                    navigate('/');
                }
            }else {
                data.subscription.unsubscribe()
            }
        })
    },[navigate]);

    const handleChangeIndex = (newIndex) => {
           setIndex(newIndex);
    }
    
    const ShowIndex = () => {

        if(index == 0) {
            return <AddQuotes/>
        }

        if(index == 1) {
            return <p>Add Chars</p>
        }

        if(index == 2) {
            return <p>Edit Chars</p>
        }
    }
   
   

    return (
        <Box className="root">
            <Box sx={{ width: '100%', height: '10%', position: 'absolute', top: 15 }}>
                <NavBar handleChangeIndex={handleChangeIndex}/>
                <Box sx={{ width: '100%', height: '100vh' }}>
                    <ShowIndex/>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Homepage;

/**
 * 
 * 
 *  const viewQuotes = async () => {

        const { data: quotes, error } = await supabase.from('quotes').select();

        if(error) {
            console.log(error)
        } else {
            console.log(quotes)
        }
    }


    const viewChar = async () => {

        const { data: characters, error } = await supabase.from('characters').select();

        if(error) {
            console.log(error)
        } else {
            console.log(characters);
        }
    }

 * 
            <button onClick={viewQuotes}> View Quotes</button>
            
            <br/>
            <br/>

            <AddQuotes/>

            <br/>
            <br/>
            
            <button onClick={viewChar}>View Characters</button>
            
            <br/>
            <br/>

            <AddChar/>

            <br/>
            <br/>

            <EditChar/>

            <br/>
            <br/>

            <button onClick={signOut}>Sign Out</button>
 */