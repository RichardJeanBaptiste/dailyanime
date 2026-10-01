import { Box, Typography } from '@mui/material';



export default function NavBar() {
    return (
        <Box  sx={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 20,  }}>
            <Typography variant="h4" component={h4}>Daily Anime</Typography>
            <p sx={{ marginLeft: '5%' }}>Add Quotes</p>
            <p>Edit Quotes</p>
            <p>Characters</p>
            <p sx={{ marginLeft: 'auto' }}>Email: ####</p>
            <p sx={{ paddingRight: '3%'}}>Sign Out</p>
        </Box>
    )
}