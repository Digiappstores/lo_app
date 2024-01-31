import React from 'react'
import { Chip, Box, Grid, Link, Typography, Stack, Button, MenuList, MenuItem, Menu, IconButton, Tooltip } from '@mui/material'
import { AuthLayout } from '.'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import RefreshIcon from '@mui/icons-material/Refresh';
import DashboardLayout from './DashboardLayout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuDrawer from './MenuDrawer'
import { useState } from 'react'

const Dashboard = () => {

    const [drawerFlag, setDrawerFlag] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <DashboardLayout>
        <Grid container mt={2} style={{ padding: 10 }}>
            <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
                <Grid container p={2} mb={2} xs={12} sm={12} alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }} >
                    <Grid xs={8} sm={10} >
                        <Typography variant='subtitle'>
                            <Box>You’re Currently on the free plan, upgrade for more benefits!</Box>
                        </Typography>
                    </Grid>
                    <Grid xs={4} sm={2} >
                        <Button endIcon={<KeyboardArrowDownIcon />} sx={{ backgroundColor: '#FCBD42', color: '#FFFFFF' }}>Upgrade</Button>
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={12} mb={4} pl={2} alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }}>
                    <Grid xs={7} sm={11} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='subtitle' sx={{ color: '#4545A5', fontWeight: '600' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                KNOWLEDGE TREE
                                <Tooltip title='Learn about Exempler & Challenger Series, Evaluation Criteria, About Live Olympiad, Queries & FAQs, Syllabus through an automated Chatbot.' arrow>
                                    <IconButton>
                                        <InfoOutlinedIcon sx={{ color: '#4545A5' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid xs={5} sm={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button sx={{ backgroundColor: '#4545A5', color: '#FFFFFF' }}><ArrowForwardIosIcon /></Button>
                    </Grid>
                </Grid>
                <Grid container mb={5} xs={12} sm={12} md={12} lg={12} alignItems='center'>
                    <Grid xs={12} sm={9} md={8} lg={9} mt={2}>
                        <Stack direction="row" spacing={2}>
                            <Chip label="All" variant="outlined" sx={{ color: '#ffffff', border: '2px solid #6A707C', backgroundColor: '#6A707C' }} />
                            <Chip label="Science" variant="outlined" sx={{ color: '#42BBEF', border: '2px solid #42BBEF' }} />
                            <Chip label="Mathematics" variant="outlined" sx={{ color: '#4545A5', border: '2px solid #4545A5' }} />
                            <Chip label="English" variant="outlined" sx={{ color: '#EF4255', border: '2px solid #EF4255' }} />
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={3} md={4} lg={3} mt={2}>
                        <Button id="dropbtn" endIcon={<KeyboardArrowDownIcon />} sx={{ backgroundColor: '#F7F8F9', color: '#6A707C' }}
                            onClick={handleClick}
                        >Filter by Status
                        </Button>
                        <Menu
                            id="dropmenu"
                            aria-labelledby="dropbtn"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}  >Completed</MenuItem>
                            <MenuItem onClick={handleClose}  >Partly Completed</MenuItem>
                            <MenuItem onClick={handleClose}  >Pending</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
                {
                    [1, 2, 2, 2].map((option) => {
                        return <Box>
                            <Chip label="Science" color="primary" className='brb_0' />
                            <Grid container item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '0px 20px 20px 20px', padding: '20px', marginBottom: '20px' }}>
                                <Grid item xs={4} sm={6} md={6} lg={6} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Typography variant='subtitle2'><Box mb={1}>Test Name</Box></Typography>
                                    <Typography variant='body2' sx={{ color: '#6A707C' }}><Box mb={1}>Practice Test</Box></Typography>
                                </Grid>
                                <Grid item xs={8} sm={6} md={6} lg={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Typography variant='h4' sx={{ color: '#0B841B', fontWeight: '300' }}><Box sx={{ m: 2 }}>18<Typography variant='body2' sx={{ color: 'black', fontWeight: '500', display: 'inline' }}>/20</Typography></Box></Typography>
                                    <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon />} variant="contained" sx={{ backgroundColor: '#838BA1' }} />
                                </Grid>
                            </Grid>
                        </Box>
                    })
                }
            </Grid>
            <Grid p={2} md={4} lg={5} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                <Grid container item md={12} lg={12} mt={2} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
                    <Grid item md={12} lg={12} >
                        <Typography variant='subtitle' justifyContent="center" alignItems="center"><Box mb={3} mt={1}>You're Currently on 2 Subjects Subscription,   upgrade license to avail more benefits!</Box></Typography>
                    </Grid>
                    <Grid item md={12} lg={12}>
                        <Box mb={1}>
                            <CustomTextField
                                type="text"
                                placeholder="Mathematics"
                                variant="outlined"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12}>
                        <Box mb={1}>
                            <CustomTextField
                                type="text"
                                placeholder="Science"
                                variant="outlined"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12}>
                        <Box mb={2}>
                            <CustomTextField
                                type="text"
                                placeholder="English"
                                variant="outlined"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CustomButton btnText="Upgrade" color="secondary" variant="contained" sx={{ color: '#FFFFFF' }}/>
                    </Grid>
                </Grid>
                <Grid container md={12} lg={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
                    <Grid item md={12} lg={12}>
                        <Typography variant='h4' sx={{fontWeight:600}}><Box align="center">LiveOlympiad</Box></Typography>
                    </Grid>
                    <Grid item md={12} lg={12} mb={3}>
                        <Typography variant='h4' sx={{fontWeight:600}}><Box align="center">Knowledge Tree</Box></Typography>
                    </Grid>
                    <Grid item md={12} lg={12} mb={3}>
                        <Typography variant='body2' align="center" sx={{ color: '#838BA1' }}><Box>Learn about Exempler & Challenger Series,Evaluation Criteria.About Live Olympiad,Queries & FAQs,Syllabus through an automated Chatbot. </Box></Typography>
                    </Grid>
                    <Grid item md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CustomButton btnText="GET STARTED" color="primary" variant="contained" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    </DashboardLayout>
}

export default Dashboard