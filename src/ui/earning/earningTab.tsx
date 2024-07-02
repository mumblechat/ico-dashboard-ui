'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Heading from '@/theme/components/heading';
import Earning from './earning';
import Community from './community';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles({
    mainDiv: {
        margin: '10px',
        minHeight: '100vh',
    },
    box_hding: {

        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    comingsoon: {
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border:'1px solid #00FFFF',
        borderRadius:'12px',
        marginTop:'1rem'
    },
    MainHis:{
        margin:'1.5rem 1.5rem 1.5rem 1.5rem'
    }
});

export default function EarningTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box className={classes.mainDiv}>



            <Box sx={{ width: '100%', border: '1px solid #1D1D20', borderRadius: '8px', marginTop: '1.5rem' }}>

                <Box sx={{ textTransform: 'capitalize', }}>
                    <Tabs
                        variant="fullWidth" // Ensure the tabs take up the full width
                        sx={{
                            backgroundColor: '#101012',
                            borderRadius: '8px',
                            padding: '4px 6px 6px 6px',
                            '.MuiTabs-indicator': {
                                height: 47,
                                color: '#000 !important',
                                background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                            },
                            '.Mui-selected': {
                                color: "#000 !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', flex: 1, '@media(max-width : 600px)':{padding:'12px 10px'} }} label="Self Mining" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', flex: 1,'@media(max-width : 600px)':{padding:'12px 10px'} }} label="Community" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', flex: 1,'@media(max-width : 600px)':{padding:'12px 10px'} }} label="History" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box mt={3}>
                        <Earning Earning={'Self Mining'} />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box mt={3}>

                        <Community />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box className={classes.MainHis}>
                    <Typography
                    sx={{
                        fontFamily: 'Bruce Forever !important',
                        color: '#00FFFF',
                        '@media(max-width : 1200px)': {
                            fontSize: '22px',
                            '@media(max-width : 900px)': {
                                fontSize: '20px'
                            }
                        }

                    }}
                    variant="h4">History Reward</Typography>
                        <Box className={classes.comingsoon}>
                            <Typography variant='h6' color={'#00FFFF'}>Coming Soon</Typography>
                        </Box>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
