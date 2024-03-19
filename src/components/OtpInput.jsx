import { Box, TextField } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'
const style = {
    width: "50px",
    height: "50px",
    margin: "10px",
    '& input': {
        fontSize: '20px', // This might be necessary for TextField input
        fontWeight: 'bold', // This might be necessary for TextField input
        textAlign: "center",
    },


}
export default function OtpInput() {
    return (
        <>
            <Box >
                <TextField id="outlined-basic" variant="outlined" sx={style} inputProps={{ maxLength: 1 }} />
                <TextField id="outlined-basic" variant="outlined" sx={style} inputProps={{ maxLength: 1 }} />
                <TextField id="outlined-basic" variant="outlined" sx={style} inputProps={{ maxLength: 1 }} />
                <TextField id="outlined-basic" variant="outlined" sx={style} inputProps={{ maxLength: 1 }} />
            </Box>
            <Box sx={{marginTop:"10px"}}>
                <Button variant="contained">Submit</Button>
            </Box>
        </>
    )
}
