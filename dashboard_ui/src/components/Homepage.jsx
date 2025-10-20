import { useEffect } from "react";
import AddChar from "./AddChar";
import AddQuotes from "./AddQuotes";
import EditChar from "./EditChar";
import { supabase } from "../utils";
import { useNavigate } from "react-router";


function Homepage(){

    let navigate = useNavigate();

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
    

    const viewQuotes = async () => {

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

    const signOut = async () => {
        
        const { error } = await supabase.auth.signOut();

        if(error) {
            console.log(error.message)
        } else {
            navigate("/")
        }
    }

    return (
        <div>

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
        </div>
    )
}

export default Homepage;