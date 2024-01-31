import { Box, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

const LoStepper = (props) => {

    const [activeStep, setActiveStep] = useState(props.activeStep);

    return <Grid container xs={12} justifyContent='center' alignItems='center'>
        <Grid xs={5} sx={{display:{xs:'none',lg:"block"}}}>
            <Stepper orientation="vertical" activeStep={activeStep}>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon} ><Typography variant='subtitle2'><Box>School Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}><Typography variant='subtitle2'><Box>Personal Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}><Typography variant='subtitle2'><Box>Choose Your Plan</Box></Typography></StepLabel>
                </Step>
            </Stepper>
        </Grid>
        <Grid xs={5} sx={{display:{xs:'block',lg:"none"},mb:1}}>
            <Stepper orientation="horizontal" activeStep={activeStep}>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon} ></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}></StepLabel>
                </Step>
            </Stepper>
        </Grid>
    </Grid>
};

export default LoStepper;