import React from 'react';
import { Box, Grid, Select, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const Sidebar = () => {
    return (<>
        {/* <Grid container mb={1} style={{ backgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid container md={2} lg={2} ml={2} mt={4} sx={{ display: { xs: 'none', sm:'none', md:'block', lg: 'block' } }}>
                <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AutoAwesomeMosaicOutlinedIcon sx={{color:'#FCBD42', fontWeight:'600'}} /><Typography variant='body2' sx={{color:'#FCBD42', fontWeight:'600'}}><Box sx={{ ml: 2 }}>Dashboard </Box></Typography></Grid>
                <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Profile</Box></Typography></Grid>
                <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon/><Typography><Box sx={{ ml: 2 }}>Subscriptions</Box></Typography></Grid>
                <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Schedule</Box></Typography></Grid>
            </Grid>
        </Grid>
    </>
    )
}

export default Sidebar;       