import { Box, InputBase, MenuItem, styled, TextField, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import Slidercoin from "./slidercoin";


const useStyles = makeStyles({
    max_btn: {
        backgroundColor: '#00FFFF',
        padding: '10px 20px',
        borderRadius: '8px',
        color: '#000',
        textDecoration: 'none',
        fontWeight: 500,
    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.5rem'
    },
    line: {
        width: '1px',
        backgroundColor: '#fff',
        height: '50px'
    },
    presale: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        justifyContent: 'center',
    },
    currentPrice: {
        backgroundColor: '#00FFFF',
        padding: '10px 36px',
        display: 'block',
        borderRadius: '40px',
        fontSize: "20px !important",
        color: '#000',
        textDecoration: 'none',
        fontWeight: 500,
        textAlign: 'center',
        marginTop: '1rem !important',
    },
    current__main__wrap: {
        background: 'linear-gradient(0deg, #080C0C, #02B3B3, #02B3B3)',
        padding: '1.5rem',
        margin: 'auto',
        width: '400px',
        borderRadius: '20px',
        border: '1px solid #1D1D20',
        marginTop: '-8rem',
        '@media(max-width : 600px)':{
            width: '100%',
            marginTop: '2rem',
        }
    },
    emptyBox: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        height: '80px',
        borderRadius: '8px',
        marginTop: '6rem',
        '@media(max-width : 600px)':{
           display:'none'
        }
    }
});

const StyledBox = styled('form')(({ theme }) => ({

}));

const currencies = [
    {
        value: 'USD',
        label: 'Private Sale',
    },
    {
        value: 'EUR',
        label: 'Pre-Sale',
    },
    {
        value: 'BTC',
        label: 'Public Sale',
    },
     
     
];

const InnerTab = () => {
    const classes = useStyles();

    
    return (
        <>
            <Box>
            <StyledBox
                    sx={{
                        margin:'1rem 0rem',
                        '@media(max-width : 600px)': {
                            minWidth: '100%'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{
                            '@media(max-width : 600px)': {
                                width: '100%'
                            },
                            color: '#000',
                            '& .MuiOutlinedInput-root': {
                                borderColor: '#000',
                                border: '#000',
                                 
                                backgroundColor: "#00ffff",
                                    color: '#000',
                                    borderRadius: '6px',
                            },

                            '&:hover .MuiOutlinedInput-root': {
                                borderColor: '#000',
                            },
                            '&.Mui-focused .MuiOutlinedInput-root': {
                                borderColor: '#000',
                            },
                            '& .MuiSvgIcon-root': { color: '#000' },

                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </StyledBox>
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
                        placeholder={'$10'}
                        type={''}
                    />
                    <Link className={classes.max_btn} href={""}>Max</Link>
                </Box>

                <Box className={classes.emptyBox}>

                </Box>
                <Box className={classes.current__main__wrap}>
                    <Box className={classes.presale}>
                        <Box>
                            <Typography>Private Sale</Typography>
                            <Typography fontSize={20} fontWeight={500}>$3.04</Typography>
                        </Box>
                        <Box className={classes.line} />
                        <Box>
                            <Typography>Current Price</Typography>
                            <Typography fontSize={20} fontWeight={500}>$3.04</Typography>
                        </Box>
                    </Box>

                    <Link className={classes.currentPrice} href={""}>Current Price</Link>

                </Box>

                <Slidercoin />
            </Box>
        </>
    )
}

export default InnerTab