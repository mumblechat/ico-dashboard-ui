import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Heading from "@/theme/components/heading";
import TableEarn from "./tableEarn";

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        minHeight: '100vh',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
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
    Card: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
    },
    cardlist: {
        padding: '10px',
    },
    boxCr:{
        border: '1px solid #1D1D20',
        borderRadius:'8px',
        marginTop:'1.5rem'
    }



});


const Card = [
    {
        id: 1,
        Title: 'Ramestta Wallet Balance',
        Amount: '0',
        data: '0.00'
    },
    {
        id: 2,
        Title: 'Your Stake',
        Amount: '1000',
        data: '0.00'
    },
    {
        id: 3,
        Title: 'Claimed Rewards',
        Amount: '0.9',
        data: '0.00'
    },
    {
        id: 4,
        Title: 'Unclaimed Rewards',
        Amount: '00.1',
        data: '0.00'
    },
]



const Earning = () => {
    const classes = useStyles();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Heading heading={"Earning Reward"} />

                <Box className={classes.boxCr}>
                <Box className={classes.cardlist}>
                    <Grid container spacing={2}>
                        {Card.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                <Box className={classes.Card}>
                                    <Typography color={'#fff'}>{item.Title}</Typography>
                                    <Typography color={'#fff'} variant="h6">{item.Amount} MMCT</Typography>
                                    <Typography color={'#999'}>$ {item.data}</Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box sx={{ marginTop: '1rem' }}>
                    <TableEarn />
                </Box>
                </Box>

            </Box>

        </>
    )
}

export default Earning