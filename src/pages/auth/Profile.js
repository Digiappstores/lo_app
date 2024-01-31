import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import DashboardLayout from './DashboardLayout'
import { Avatar } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const category = [
    {
        label: "F",
        value: 1
    },
    {
        label: "M",
        value: 2
    }
]

const Profile = () => {
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
    return (
        <DashboardLayout>
            <Grid container p={4}>
                <Grid xs={12} sm={12} md={4} lg={4} p={2}>
                    <Grid container xs={12} sm={12} md={12} lg={12} p={1} alignItems='center' justifyContent='center' sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
                        <Grid container xs={12} sm={8} md={12} lg={8} p={1} mb={2} mt={3} justifyContent='center' alignItems='center'>
                            <Grid xs={12} sm={12} md={12} lg={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', height: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <Avatar sx={{ width: '50%', height: '50%' }} />
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant='subtitle2'><Box>Emily <Typography variant='subtitle2' sx={{ color: '#838BA1', display: 'inline' }}>|</Typography> VII-A</Box></Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant='body2' sx={{ color: '#838BA1' }}><Box>Amity International School, Noida</Box></Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} sm={8} md={12} lg={8} p={1} mb={3} justifyContent='center' alignItems='center'>
                            <Grid xs={12} sm={12} md={12}  lg={12} mb={2}>
                                <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Total Fees Paid</Box></Typography>
                                <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} />600</Box></Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={12}  lg={12} mb={2}>
                                <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Subject Subscriptions</Box></Typography>
                                <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>English, Science</Box></Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={12}  lg={12} mb={2}>
                                <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Date of Joining</Box></Typography>
                                <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>14/06/2022</Box></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={8} p={2}>
                    <Grid container xs={12} sm={12} md={12} lg={12} p={1} alignItems='center' justifyContent='center'>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <Typography variant='h6'><Box>Edit Information</Box></Typography>
                        </Grid>
                        <Grid xs={12} sm={12} md={8} lg={8} mb={2}>
                            <CustomTextField
                                type="text"
                                placeholder="Full Name"
                                variant="filled"
                                required
                                onChange={(event) => { setPageData({ ...pageData, fullname: event.target.value }) }}
                                error={submitFlag && getErrorMsz('fullname', pageData.fullname) != ""}
                                errorMsz={getErrorMsz('fullname', pageData.fullname)} />
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4} mb={2}>
                            <CustomTextField
                                placeholder="Gender"
                                variant="filled"
                                required
                                onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                                error={submitFlag && getErrorMsz('gender', pageData.gender) != ""}
                                errorMsz={getErrorMsz('gender', pageData.gender)}>
                                {category.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                ))}
                            </CustomTextField>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <CustomTextField
                                placeholder="Roll No."
                                variant="filled"
                                required
                                onChange={(event) => { setPageData({ ...pageData, rollno: event.target.value }) }}
                                error={submitFlag && getErrorMsz('rollno', pageData.rollno) != ""}
                                errorMsz={getErrorMsz('rollno', pageData.rollno)} />
                        </Grid>
                        <Grid xs={12} sm={12} md={8} lg={8} mb={2}>
                            <CustomTextField
                                placeholder="Class"
                                variant="filled"
                                value={pageData.class}
                                onChange={(event) => { setPageData({ ...pageData, class: event.target.value }) }}
                                required
                                error={submitFlag && getErrorMsz('student_class', pageData.class) != ""}
                                errorMsz={getErrorMsz('student_class', pageData.class)}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4} mb={2}>
                            <CustomTextField
                                placeholder="Section"
                                variant="filled"
                                value={pageData.section}
                                onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
                                required
                                error={submitFlag && getErrorMsz('student_section', pageData.section) != ""}
                                errorMsz={getErrorMsz('student_section', pageData.section)}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <CustomTextField
                                placeholder="Date of Birth"
                                id="date"
                                type="date"
                                required
                                variant="filled"
                                onChange={(event) => { setPageData({ ...pageData, dob: event.target.value }) }}
                                error={submitFlag && getErrorMsz('dob', pageData.dob) != ""}
                                errorMsz={getErrorMsz('dob', pageData.dob)}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <CustomTextField
                                type="email"
                                placeholder="Email Address (Optional)"
                                variant="filled"
                                required
                                onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                                error={submitFlag && getErrorMsz('email', pageData.email) != ""}
                                errorMsz={getErrorMsz('email', pageData.email)}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <CustomTextField
                                placeholder="School Area Postal Code"
                                variant="filled"
                                value={pageData.postalCode}
                                onChange={(event) => { setPageData({ ...pageData, postalCode: event.target.value }) }}
                                required
                                error={submitFlag && getErrorMsz('postal_code', pageData.postalCode) != ""}
                                errorMsz={getErrorMsz('postal_code', pageData.postalCode)}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                            <CustomTextField
                                placeholder="School"
                                variant="filled"
                                value={pageData.school}
                                onChange={(event) => { setPageData({ ...pageData, school: event.target.value }) }}
                                required
                                error={submitFlag && getErrorMsz('student_school', pageData.school) != ""}
                                errorMsz={getErrorMsz('student_school', pageData.school)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </DashboardLayout>

    );
};

export default Profile