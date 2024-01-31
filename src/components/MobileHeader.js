import React from 'react'
import { Box, Grid } from '@mui/material';

const MobileHeader = () => {
    return (
        <Grid container>
            <Grid item xs={12} >
                <Box width={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Grid container xs={12} alignItems="center" justifyContent="center" className="height_100">
                        <Grid item xs={10} p={2}>
                            <img src='../images/brand.svg' style={{ width: "40%" }} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MobileHeader