import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { OnboardingLayout } from './layout/OnboardingLayout'
import { responsiveStype } from '../../theme/responsive';


export default function PersonalDetails() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ fullname: "", gender: "", rollno: "", dob: "", email: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }
    return <OnboardingLayout stepperIndex="1">
        <Grid container xs="12">
            <Grid xs={12}>
                <Typography variant='h3'><Box mb={3} mt={5} fontWeight="bold" sx={responsiveStype.Personal.Typo}>Personal Details</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3} sx={responsiveStype.Personal.Typo}>Enter the personal details of the student </Box></Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            type="text"
                            placeholder="Full Name"
                            variant="filled"
                            required
                            onChange={(event) => { setPageData({ ...pageData, fullname: event.target.value }) }}
                            error={submitFlag && getErrorMsz('fullname', pageData.fullname) != ""}
                            errorMsz={getErrorMsz('fullname', pageData.fullname)} />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            placeholder="Gender"
                            variant="filled"
                            required
                            onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                            error={submitFlag && getErrorMsz('gender', pageData.gender) != ""}
                            errorMsz={getErrorMsz('gender', pageData.gender)}>
                            <Select>
                                <MenuItem>F</MenuItem>
                                <MenuItem>M</MenuItem>
                            </Select>
                        </CustomTextField>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="RollNo"
                        variant="filled"
                        required
                        onChange={(event) => { setPageData({ ...pageData, rollno: event.target.value }) }}
                        error={submitFlag && getErrorMsz('rollno', pageData.rollno) != ""}
                        errorMsz={getErrorMsz('rollno', pageData.rollno)} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Date of Birth"
                        id="date"
                        type="date"
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(event) => { setPageData({ ...pageData, dob: event.target.value }) }}
                        error={submitFlag && getErrorMsz('dob', pageData.dob) != ""}
                        errorMsz={getErrorMsz('dob', pageData.dob)} />
                </Box>
            </Grid>
            <Grid item  xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="email"
                        placeholder="Email Address"
                        variant="filled"
                        required
                        onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                        error={submitFlag && getErrorMsz('email', pageData.email) != ""}
                        errorMsz={getErrorMsz('email', pageData.email)} />
                </Box>
            </Grid>
            <Grid xs={12} sx={responsiveStype.Personal.Typo}>
                <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
            </Grid>
        </Grid>
        {
            Object.keys(snakeBarProps).length > 0 &&
            <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
        }
    </OnboardingLayout>
}
