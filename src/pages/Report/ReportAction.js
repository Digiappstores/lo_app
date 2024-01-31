import React from 'react'
import { CustomButton } from '../../components/Button';
import { Box, Grid,Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ReportAction = () => {
    return (
        <Grid container sx={{height:'100%'}} alignItems='center' justify='flex-start' mt={2} mb={2}>
            <Grid item lg={1} ml={3} >
                <CustomButton btnText="BACK" variant="outlined" startIcon={<ArrowBackIosIcon/>} />
            </Grid>
            <Grid item lg={8}>
                <Typography>Individual Question Report</Typography>
            </Grid>
            <Grid item ml={3}>
                <CustomButton btnText="PREVIOUS" variant="outlined" startIcon={<ArrowBackIcon/>} />
            </Grid>
            <Grid item ml={4} >
                <CustomButton btnText="NEXT" variant="outlined" endIcon={<ArrowForwardIcon/>} />
            </Grid>
        </Grid>
    )
}

export default ReportAction