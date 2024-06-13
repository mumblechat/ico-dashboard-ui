import { Box, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import CalculateTab from "./calculateTab";
import InnerTab from "./innerTab";

const useStyles = makeStyles({
    coin__lunch: {
        textAlign: 'center',
    },
    mainDiv: {
        padding: '1.5rem',
        '@media(max-width : 600px)':{
            padding: '0.5rem',
        }
    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        padding: '2px',
        marginTop: '0.5rem'
    },
    top__input: {
        marginTop: '1.5rem'
    }
});

const CoinCalculate = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.coin__lunch}>
                    <Typography fontSize={20} color={'#fff'}>Calculate your profits on coin launch</Typography>
                </Box>

                <Box className={classes.top__input}>
                    <Typography color={'#fff'}>Enter how much RAMA coins you have in the input below.</Typography>
                    <Box className={classes.max_btn__wrap}>
                        <InputBase
                            sx={{
                                flex: 1,
                                color: '#fff',
                                width: '100%',
                                padding: '0.3rem 0.5rem',
                                ':-moz-placeholder': {
                                    color: 'fff',
                                }
                            }}
                            fullWidth
                            placeholder={'0.00 RAMA'}
                            type={''}
                        />
                    </Box>
                </Box>

                <Box className={classes.top__input}>
                    <Typography color={'#fff'}>USD Amount</Typography>
                    <Box className={classes.max_btn__wrap}>
                        <InputBase
                            sx={{
                                flex: 1,
                                color: '#fff',
                                width: '100%',
                                padding: '0.3rem 0.5rem',
                                ':-moz-placeholder': {
                                    color: 'fff',
                                }
                            }}
                            fullWidth
                            placeholder={'$0.00'}
                            type={''}
                        />
                    </Box>
                </Box>

                <InnerTab />
            </Box>
        </>
    )
}

export default CoinCalculate