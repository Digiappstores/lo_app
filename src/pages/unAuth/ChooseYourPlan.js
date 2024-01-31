import { Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { CustomButton } from '../../components/Button';
import { OnboardingLayout } from './layout/OnboardingLayout';
import { responsiveStype } from '../../theme/responsive';


const ChooseYourPlan = () => {

    return (
        <OnboardingLayout>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h3'>
                        <Box mb={2} mt={2} fontWeight="bold" sx={responsiveStype.CreatePassword.Typo}>Choose Your Plan!</Box>
                    </Typography>
                </Grid>
                {
                    [1, 1, 1, 1].map((option) => {
                        return <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Typography variant='body2'><Box mb={2}>Single Subject</Box></Typography>
                            </Grid>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Typography variant='body2'><Box mb={2}>₹300 for Year</Box></Typography>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Box p={1}>
                                    <Stack direction="row" spacing={2}>
                                        <Chip label="Science" />
                                        <Chip label="Mathematics" variant="outlined" />
                                        <Chip label="English" variant="outlined" />
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    })
                }
                <Grid container xs={12} justifyContent="center" alignItems="center">
                    <Grid xs={6} sx={responsiveStype.CreatePassword.Typo}>
                        <CustomButton btnText="Enter" color="primary" variant="contained" className="minWidth240" />
                    </Grid>
                    <Grid xs={6} sx={{ mb: 1 }}>
                        <Typography variant='body2' ><Box><Link href="#" >Skip</Link> for now</Box></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </OnboardingLayout>
    );
};

export default ChooseYourPlan;