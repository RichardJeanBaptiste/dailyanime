import { useEffect, useState } from "react";
import AddChar from "./AddChar";
import AddQuotes from "./AddQuotes";
import EditChar from "./EditChar";
import { supabase } from "../utils";
import { useNavigate } from "react-router";
import './Homepage.css';
import NavBar from "./NavBar";
import Box from '@mui/material/Box';
import Dashboard from "./Dashboard/Dashboard";


function Homepage(){

 
    return (
        <Box className="root">
            
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