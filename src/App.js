import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
function TravelDateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
   
    
    return (
        <div className="App">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <DatePicker
                            label="Check-in"
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                                if (endDate && newValue > endDate) {
                                    setEndDate(null);
                                }
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <DatePicker
                            label="Check-out"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            minDate={startDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                </LocalizationProvider>
                <ColorButton variant="contained" >Continue</ColorButton >
            </Box>
        </div>
    );
}

export default TravelDateRangePicker;
