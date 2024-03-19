import React, { useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';

const style = {
    width: "50px",
    height: "50px",
    margin: "10px",
    fontSize: "30px",
    fontWeight: "bold",
}

const OtpInput = () => {
    const inputRefs = useRef(Array.from({ length: 4 }, () => React.createRef()));

    const handleInputChange = (index, e) => {
        console.log("this is handle input change ")
        const value = e.target.value;
        if (index < inputRefs.current.length - 1) {
            // Automatically focus on the next input
            inputRefs.current[index+1].current.focus();
            
        }
    };

    const handleKeyPress = (index, e) => {
        console.log("this is handle key press")
        if (e.key === 'Backspace' && index > 0) {
            inputRefs.current[index].current.value=""

            // Automatically move focus to previous input on backspace
            inputRefs.current[index-1].current.focus();
        }
    };

    return (
        <>
            <Box>
                {inputRefs.current.map((ref, index) => (
                    <TextField
                        key={index}
                        id={`outlined-basic-${index}`}
                        variant="outlined"
                        sx={style}
                        inputRef={ref}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleKeyPress(index, e)}
                        autoFocus={index === 0} // Autofocus on the first input
                    />
                ))}
            </Box>
            <Box>
                <Button variant="contained">Submit</Button>
            </Box>
        </>
    );
}

export default OtpInput;
