import { Box, Drawer, Grid, Typography } from '@mui/material';
import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const MenuDrawer = ({ setDrawerFlag }) => {
    return (
        <Drawer anchor="right" open={true} onClose={() => setDrawerFlag(false)}>
            <>
                <Box style={{ minWidth:'250px', width:'70%', maxWidth: '350px', padding: '20px' }}>
                    <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
                        <Grid container md={2} lg={2} ml={2} mt={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AutoAwesomeMosaicOutlinedIcon /><Typography variant='body2'><Box sx={{ ml: 2 }}>Dashboard </Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Profile</Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><QueuePlayNextOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Subscriptions</Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Schedule</Box></Typography></Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </Drawer>
    )
}

export default MenuDrawer;