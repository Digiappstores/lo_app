import { Avatar, Box, Button, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlarmIcon from '@mui/icons-material/Alarm';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';


const Pallette = () => {
    return (
        <Grid container>
            <Grid container md={12} lg={12} p={3} sx={{ backgroundColor: '#8391A1', display:{md:'flex', lg:'none'} }}>
                <Grid container md={12} lg={12} sx={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                    <Grid md={7} lg={7}>
                        <Typography variant='body2' sx={{color:'#ffffff'}}>Practice Test</Typography>
                        <Typography variant='subtitle1' sx={{color:'#ffffff'}}>Test Name</Typography>
                    </Grid>
                    <Grid md={5} lg={5} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                        <Stack>
                            <Chip variant='outlined' label='Maths' sx={{color:'#E54545', backgroundColor:'#ffffff', border:'2px solid #E54545'}}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} p={3} sx={{ backgroundColor: '#F7F8F9' }}>
                <Grid container md={12} lg={12} mb={2} alignItems='center'>
                    <Grid md={9} lg={10}>
                        <Typography variant='body1' sx={{ color: '#E54545' }} >
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <AlarmIcon sx={{ marginRight: '10px', fontSize: '20px' }} />24 Min 34 Sec
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid md={3} lg={2} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                        <IconButton><MoreVertIcon /></IconButton>
                    </Grid>
                </Grid>
                <Grid md={12} lg={12} mb={2} sx={{ display: { md: 'none', lg: 'flex' } }}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="ALL" variant="filled" sx={{ color: '#ffffff', backgroundColor: "#838BA1" }} />
                        <Chip label="26 PENDING" variant="outlined" sx={{ color: '#1E232C', backgroundColor: "#ffffff" }} />
                        <Chip label="3 DONE" variant="filled" sx={{ color: '#1E232C', backgroundColor: "#42BBEF" }} />
                        <Chip label="1 SKIPPED" variant="filled" sx={{ color: '#1E232C', backgroundColor: "#FCBD42" }} />
                    </Stack>
                </Grid>
                <Grid md={12} lg={12} mb={4} sx={{ display: { md: 'flex', lg: 'none' }, justifyContent: 'center', alignItems: 'centers' }}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Chip label="ALL" variant="filled" sx={{ color: '#ffffff', backgroundColor: "#838BA1" }} />
                        <Chip label="3 DONE" variant="filled" sx={{ color: '#1E232C', backgroundColor: "#42BBEF" }} />
                        <Chip label="1 SKIPPED" variant="filled" sx={{ color: '#1E232C', backgroundColor: "#FCBD42" }} />
                        <Chip label="26 PENDING" variant="outlined" sx={{ color: '#1E232C', backgroundColor: "#ffffff" }} />
                    </Stack>
                </Grid>
                <Grid container md={12} lg={12} mb={2} sx={{ display: { md: 'none', lg: 'flex' } }}>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((option) => {
                            return <Grid md={2} lg={2} mb={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar sx={{ width: '32px', height: '32px', color: '#1E232C', backgroundColor: '#ffffff', border: '0.25px solid #1C1B1F', fontSize: '14px' }}>1</Avatar>
                            </Grid>
                        })
                    }
                </Grid>
                <Grid container md={12} lg={12} p={2} sx={{ border: '2px solid lightgray', borderRadius: '10px' }}>
                    <Grid md={8} lg={8} sx={{ display: { md: 'none', lg: 'block' } }}>
                        <Box sx={{ height: '135px', width: '100%', borderRadius: '10px' }}>
                            <img src='./assets/girlimg.jpeg' height='100%' width='100%' sx={{ borderRadius: '10px' }} />
                        </Box>
                    </Grid>
                    <Grid container md={12} lg={4} justifyContent='center' alignItems='center'>
                        <Grid md={6} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button startIcon={<PhotoCameraOutlinedIcon />} endIcon={<DoneIcon />} sx={{ backgroundColor: "#ffffff" }} />
                        </Grid>
                        <Grid md={6} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button startIcon={<MicNoneIcon />} endIcon={<CloseIcon />} sx={{ backgroundColor: "#ffffff" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Pallette;