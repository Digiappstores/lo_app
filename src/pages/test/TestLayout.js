import { Grid } from '@mui/material';
import React from 'react';
import Header from '../auth/Header';
import Pallette from './Pallette';
import TopAction from './TopAction';

const TestLayout = () => {
  return (
    <Grid container>
        <Grid md={12} lg={12} sx={{display:{md:'none', lg:'block'}}}>
            <Header/>
        </Grid>
        <Grid md={9} lg={9}>
            <TopAction/>
        </Grid>
        <Grid md={3} lg={3}>
            <Pallette/>
        </Grid>
    </Grid>
  );
};

export default TestLayout;