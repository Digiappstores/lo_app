import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/Button';
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { CustomOtp } from '../../components/otp';
import { afterValidate } from '../../utils/commonService';
import { UnAuthLayout } from './layout/UnAuthLayout';
import { responsiveStype } from '../../theme/responsive';

const MobileVerification = () => {
    const navigate = useNavigate();
    const [submitFlag, setsubmitFlag] = useState(false);
    const [snakeBarProps, setSnakeBarProps] = useState({});

    const savedOtp = 1234;
    const [otp, setOtp] = useState();
    const [hasErrored, setHasErrored] = useState(false);
    const [errorMsz, setErrorMsz] = useState("");
    const [mobNum, setMobNum] = useState("9897969592")
    const handleChangeOtp = (value) => {
        setOtp(value)
    }

    const submitHandler = () => {
        setsubmitFlag(true);
        setHasErrored(otp == undefined ? true : otp.length == 4 ? false : true);
        setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 4 ? "" : "Enter empty otp")
        if (otp != undefined && otp.length == 4) {
            afterValidate(afterValidateCallBack)
        }
    };

    const afterValidateCallBack = (second) => {
        console.log('otp', otp)
        setSnakeBarProps({ snackbarFlag: true, msz: "Mobile number verified", type: "success" })
    }

    return <UnAuthLayout>
        <Grid container mt={4} justifyContent="center" alignItems="center">
            <Grid xs={6} lg={12} >
                <Typography variant='h3'><Box mb={1} fontWeight="bold" width="160px" sx={responsiveStype.Mobilever.Typo} >Mobile Verification</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3} sx={responsiveStype.Mobilever.Typo}>Enter the 4-Digit OTP recieved on +91-{mobNum} over WhatsApp</Box></Typography>
            </Grid>
            <Grid xs={12} >
                <Box mb={2} width={1}>
                    <CustomOtp value={otp} handleChange={handleChangeOtp} hasErrored={hasErrored} errorMsz={errorMsz} />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={2} sx={responsiveStype.Mobilever.Typo}>
                    <CustomButton btnText="Verify" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2' fontWeight='bold' fontSize='12px'><Box mb={10} sx={responsiveStype.Mobilever.Typo}>WhatsApp necessary for OTP to work</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'  fontWeight='bold'><Box mb={3} mt={18} sx={responsiveStype.Mobilever.Typo}>OTP Not Recieved? <Link href="#" underline="none">Resend</Link></Box></Typography>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </Grid>
    </UnAuthLayout>
};

export default MobileVerification;