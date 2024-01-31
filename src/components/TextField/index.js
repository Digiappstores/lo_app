import { Box, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const CustomTextField = (props) => {
    const { required, type, readOnlyValue, errorMsz, error, startIcon = false, endIcon, inputLabel, select, selectArr, selectDefaultOption } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <>
        {
            inputLabel &&
            <Box mb={2}>
                <Typography variant='body1' component="span">
                    <Box fontWeight="bold">{inputLabel}{required && <sub style={{ position: "absolute" }}>*   </sub>}</Box>
                </Typography>
            </Box>
        }
        {
            select ?
                <TextField {...props}>
                    <MenuItem key={selectDefaultOption.value} value={selectDefaultOption.value}>
                        {selectDefaultOption.label}
                    </MenuItem>
                    {selectArr.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                : <TextField

                    type={type == "password" ? showPassword ? 'text' : 'password' : type}
                    InputProps={{
                        readOnly: readOnlyValue,
                        startAdornment: startIcon && (
                            <InputAdornment position="start">
                                {startIcon}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            type == "password" ?
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                :
                                endIcon && <InputAdornment position="start">
                                    {endIcon}
                                </InputAdornment>
                        )
                    }}
                    {...props}
                />
        }
        {
            required && error &&
            <Typography variant='body1' className="errorDom" component="span" style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}>
                <Box>{errorMsz}</Box>
            </Typography>
        }
    </>
}
