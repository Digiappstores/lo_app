import React from 'react'
import Header from '../auth/Header'
import ReportAction from './ReportAction'
import ReportSider from './ReportSider'
import { Box, Grid } from '@mui/material';

const ReportLayout = () => {
  return (
    <>
    <Grid container>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={12}>
            <ReportAction/> 
        </Grid>
        <Grid item xs={7}>
        
        </Grid>
        <Grid item xs={5}>
            <ReportSider/>
        </Grid>
    </Grid> 
    </>
  )
}

export default ReportLayout