import Heading from "@/theme/components/heading";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import contribution_shape01 from '../../icons/contribution_shape01.png'
import contribution_shape02 from '../../icons/contribution_shape02.png'
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        marginTop: '5rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            marginTop: '3rem',
        }

    },
    presale: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '2.5rem'
    },
    grad: {
        background: 'linear-gradient(286deg, #00FFFF 0%, #00FFFF 47.6%, #080808 98.23%)',
        padding: '14px 10px',
        borderRadius: '30px',
        width: '80%'
    },
    datacount: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    dotBox: {
        textAlign: 'center'
    },
    arrowBtn: {
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#00FFFF !important',
        color: '#000',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        borderRadius: '5rem',
        transition: '0.5s',
        '&:hover': {
            transform: 'translateX(-5px)'
        }
    },
    btn2: {
        backgroundColor: '#transparent !important',
        color: '#00FFFF',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        borderRadius: '5rem',
        transition: '0.5s',
        border: '1px solid #00FFFF',
        '&:hover': {
            transform: 'translateX(5px)'
        }
    },
    btnWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            gap: '1rem',
        }
    },
    circle: {
        width: '10px',
        height: '10px',
        borderRadius: '30px',
        backgroundColor: '#3DC1F2'
    },
    circle_wrap: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center'
    }
})


const Countribution = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Box className={classes.heading}>
                    <Box>
                        <Heading heading={'$45,256,432'} />
                    </Box>

                    <Typography sx={{
                         '@media(max-width : 900px)':{
                            fontSize:'24px',
                            '@media(max-width : 600px)':{
                            fontSize:'20px'
                        }
                        }
                    }} variant="h4" fontFamily={'Bruce Forever!important'}>Contribution Receive</Typography>
                </Box>

                <Box className={classes.presale}>
                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>PRE-SALE</Typography>
                        <Typography>|</Typography>
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>SOFT CAP</Typography>
                        <Typography>|</Typography>
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>BONUS</Typography>
                        <Typography>|</Typography>
                    </Box>
                </Box>
                <Container>
                    {/* <SliderWithProgress/> */}
                    <Box
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            padding: '4px',
                            borderRadius: '30px',
                            marginTop: '1rem'
                        }}
                    >
                        <Box className={classes.grad} />
                    </Box>

                    <Box className={classes.datacount}>
                        <Typography sx={{ '@media(max-width : 600px)': { fontSize: '15px' } }} fontWeight={600} variant="h5">65 target raised</Typography>
                        <Typography sx={{ '@media(max-width : 600px)': { fontSize: '15px' } }} fontWeight={600} variant="h5">1 ETH = $1000 = 3177.38 CIC</Typography>
                    </Box>
                </Container>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            {/* <Box className={classes.dotBox}>
                                <Image src={contribution_shape01} alt="" />
                            </Box> */}

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box>
                                <Box className={classes.btnWrap}>
                                    <Link className={classes.btn} href={""}>
                                        <Typography>Purchase a Token</Typography>
                                    </Link>
                                    <Link className={classes.btn2} href={""}>
                                        <Typography>Read White Paper</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            {/* <Box className={classes.dotBox}>
                                <Image src={contribution_shape02} alt="" />
                            </Box> */}
                        </Grid>

                    </Grid>

                </Box>


            </Box>
        </>
    )
}

export default Countribution;