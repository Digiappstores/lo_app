import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { UnAuthLayout } from './layout/UnAuthLayout'
import { responsiveStype } from '../../theme/responsive';

export default function ResetPassword() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };
    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }
    return <UnAuthLayout>
        <Grid container justifyContent="center" alignItems="center" >
            <Grid xs={6} lg={12}>
                <Typography variant='h3'><Box mb={3} fontWeight="bold" sx={responsiveStype.CreatePassword.Typo}>Create New Password</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3} sx={responsiveStype.CreatePassword.Typo}>Create on Unique 6 Digit Numeric Password </Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="password"
                        placeholder="Password"
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('password', pageData.password) != ""}
                        errorMsz={getErrorMsz('password', pageData.password)}
                        onChange={(event) => { setPageData({ ...pageData, password: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="Password"
                        placeholder="Confirm Password"
                        variant="filled"
                        required
                        onChange={(event) => { setPageData({ ...pageData, confirmpassword: event.target.value }) }}
                        error={submitFlag && getErrorMsz('conrfirm_password', pageData.confirmpassword) != ""}
                        errorMsz={getErrorMsz('conrfirm_password', pageData.confirmpassword)} />
                </Box>
            </Grid>
            <Grid xs={12} mb={8} sx={responsiveStype.CreatePassword.Typo}>
                <CustomButton  btnText="Confirm Password" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
            </Grid>
        </Grid>
        {
            Object.keys(snakeBarProps).length > 0 &&
            <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
        }
    </UnAuthLayout>
}
