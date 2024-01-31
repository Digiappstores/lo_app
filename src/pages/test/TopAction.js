import { Button, Grid } from '@mui/material';
import React from 'react';
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const TopAction = () => {
    return (
        <Grid container p={3}>
            <Grid md={6} lg={6} sx={{display:{md:'none', lg:'block'}}}>
                <Button variant='contained' startIcon={<HistoryIcon />} sx={{ backgroundColor: '#FCBD42', color: '#1C1B1F' }}>DO LATER</Button>
            </Grid>
            <Grid md={6} lg={6} sx={{display:{md:'block', lg:'none'}}}>
                <Button variant='contained' sx={{ backgroundColor: '#FCBD42', color: '#1C1B1F', border:'2px solid #1C1B1F' }}><HistoryIcon /></Button>
            </Grid>
            <Grid md={6} lg={6} sx={{ display:{md:'none', lg:'flex'}, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button variant='outlined' startIcon={<ArrowBackIcon />} sx={{ color: '#1C1B1F' }}>PREVIOUS</Button>
                <Button variant='outlined' endIcon={<ArrowForwardIcon />} sx={{ marginLeft: '20px', color: '#1C1B1F' }}>NEXT</Button>
            </Grid>
            <Grid md={6} lg={6} sx={{ display:{md:'flex', lg:'none'}, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button variant='outlined' sx={{ color: '#1C1B1F', border:'2px solid #1C1B1F' }}><ArrowBackIcon /></Button>
                <Button variant='outlined' sx={{ marginLeft: '20px', color: '#1C1B1F', border:'2px solid #1C1B1F' }}><ArrowForwardIcon /></Button>
            </Grid>
        </Grid>
        
    );
};

export default TopAction;