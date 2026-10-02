import { Box, Typography, Button } from '@mui/material';
import { supabase } from "../utils";
import { useNavigate } from "react-router";


export default function NavBar({handleChangeIndex}) {

    let navigate = useNavigate();

     const signOut = async () => {
        
        const { error } = await supabase.auth.signOut();

        if(error) {
            console.log(error.message)
        } else {
            navigate("/")
        }
    }

    return (
        <Box  sx={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Typography variant="h4" component="h4">Daily Anime</Typography>
            <Button variant="text" sx={{ marginLeft: '5%' }} onClick={() => handleChangeIndex(0)}>Add Quotes</Button>
            <Button variant="text" onClick={() => handleChangeIndex(1)}>Edit Quotes</Button>
            <Button variant="text" onClick={() => handleChangeIndex(2)}>Characters</Button>
            <Button variant="text" sx={{ marginLeft: 'auto' , paddingRight: '3%'}} onClick={signOut}>Sign Out</Button>
        </Box>
    )
}