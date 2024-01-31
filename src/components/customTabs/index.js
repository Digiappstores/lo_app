import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: 2,
            position: "relative"
        },

        tabbarWrapType1: {
            boxShadow: 'none !important',
            backgroundColor: 'transparent !important',
        },
        tabbarWrapType2: {
            overflowX: "hidden !important",
            boxShadow: 'none !important',
            width: "100%",
            backgroundColor: 'transparent !important',
        },
        tabbar: {
            '& .MuiTab-wrapper': {
                alignItems: "center"
            }
        }
    }),
);


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ padding: '0px' }} p={1}>
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const CustomTabs = (props) => {
    const classes = useStyles();
    const { tabArr, tabLabel, indicatorColor, textColor, scrollButtons, type, activeIndex } = props
    const [value, setValue] = React.useState(activeIndex);


    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderLabel = (option) => {
        return <React.Fragment>
            <span>{option.label}
                {
                    option.count != undefined && <span>{option.count}</span>
                }
            </span>
        </React.Fragment>
    }

    return <Box className={classes.root}>
        <AppBar className={`${type == "1" ? classes.tabbarWrapType1 : classes.tabbarWrapType2}`} position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                indicatorColor={indicatorColor}
                textColor={textColor}
                aria-label={tabLabel}
                centered
            >
                {
                    tabArr.map((option, index) => <Tab key={`${option.label}_label`} label={renderLabel(option)} {...a11yProps(index)} />)
                }
            </Tabs>
        </AppBar>
        {
            tabArr.map((option, index) => <TabPanel key={`${option.label}_content`} value={value} index={index}>{option.component}</TabPanel>)
        }
    </Box>
}

export default CustomTabs