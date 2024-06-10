import { Box, Grid, InputBase, Typography } from "@mui/material"
import DashboardHeader from "../shared/dashboardHeader"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import dleft from '../../icons/dleft.svg'
import dright from '../../icons/dright.svg'
import Heading from "@/theme/components/heading";
import rmesta from '../../icons/rmesta.svg'
import shield from '../../icons/Sheild.svg'
import slider1 from '../../icons/slider1.svg'
import slider2 from '../../icons/slider2.svg'
import l1 from '../../icons/l1.svg'
import l2 from '../../icons/l2.svg'
import l3 from '../../icons/l3.svg'
import Text from "@/theme/components/text";
import coinline from '../../icons/coinline.svg'
import Link from "next/link";
import r1 from '../../icons/r1.svg'
import r2 from '../../icons/r2.svg'
import AddressCopy from "@/theme/components/addressCopy";
import linkbtnimg from '../../icons/linkbtnimg.svg'

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        '@media(max-width : 1200px)':{
            // margin: '40px 20px 20px 60px',
        }
    },

    step__one: {
        border: '1px solid #1D1D20',
        borderRadius: '12px'
    },
    step__one_box: {
        backgroundColor: '#101012',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Top_hding: {
        textAlign: 'center'
    },
    box__logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    step__two_box: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between',
        padding: '1rem',
        '@media(max-width : 1200px)':{
            gap:'1.5rem'
        }
    },

    step__two: {
        marginTop: '1rem',
    },
    list___bx: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '12px',
        textAlign: 'center',
        height:'100%'
    },
    step__three: {
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        padding: 4,
        marginTop: '1rem',
    },
    coin_hding: {
        backgroundColor: '#101012',
        padding: '1.5rem',
        borderRadius: '10px 10px 0px 0px',
        textAlign: 'center',
        fontWeight: 500,
    },
    currentsale: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem'
    },
    slider__img: {
        width: '100%'
    },
    currentsale2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    rama__log: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        alignItems: 'center',
        gap: '10px',
        marginTop: '1.5rem'
    },
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
        borderRadius: '12px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.5rem'
    },

    worth: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        padding: '1rem 0rem'
    },
    buy__btn: {
        backgroundColor: '#00FFFF',
        padding: '10px 20px',
        borderRadius: '30px',
        color: '#000',
        textDecoration: 'none',
        fontWeight: 700,
        display: 'block',
        textAlign: 'center',
        fontSize: '20px'
    },
    middleBox: {
        padding: '0rem 2rem 1rem 2rem'
    },
    step__four: {
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        padding: '1rem',
        height: '100%'
    },
    step__four2: {
        border: '1px solid #1D1D20',
        borderRadius: '12px',


    },
    referral: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem'
    },
    ref__link: {
        backgroundColor: '#00FFFF',
        padding: '0.5rem 1rem',
        borderRadius: '0px 0px 8px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1
    },
    sldr:{
        width:'100%'
    }

});


const Box__list = [
    {
        image: l1,
        title: 'Your Total $RAMA Balance',
        data: '0.00'
    },
    {
        image: l2,
        title: 'Your Coin Worth at Launch',
        data: '$0.00'
    },
    {
        image: l3,
        title: 'Your Referral Earnings',
        data: '0 MMCT'
    },
]

const Dsboard = () => {
    const classes = useStyles();
    return (
        <>
            <DashboardHeader />
            <Box className={classes.mainDiv}>
                <Box className={classes.step__one}>
                    <Box className={classes.step__one_box}>
                        <Box><Image src={dleft} alt={""} /></Box>
                        <Box className={classes.Top_hding}>
                            <Heading heading={"Welcome to"} />
                            <Heading heading={"Mumblechat Dashboard"} />
                        </Box>
                        <Box><Image src={dright} alt={""} /></Box>
                    </Box>

                    <Box className={classes.step__two_box}>

                        <Box className={classes.box__logo}>
                            <Image src={rmesta} alt={""} />
                            <Typography>Ramestta</Typography>
                        </Box>

                        <Box >
                            <Image className={classes.sldr} src={slider1} alt={""} />
                        </Box>

                        <Box className={classes.box__logo}>
                            <Typography>Mumblechat</Typography>
                            <Image src={shield} alt={""} width={60} />
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.step__two}>
                    <Grid container spacing={2}>
                        {Box__list.map((item, index) => (
                            <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                                <Box className={classes.list___bx}>
                                    <Image src={item.image} alt={""} />
                                    <Text text={item.title} />
                                    <Typography fontWeight={500} variant="h4">{item.data}</Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>

                <Box className={classes.step__three}>
                    <Box className={classes.coin_hding}>
                        <Typography variant="h5">Buy Coins</Typography>
                    </Box>
                    <Box className={classes.middleBox}>

                        <Box textAlign={'center'} mt={3}>
                            <Typography>  <Typography component={'span'}>Private Sale</Typography></Typography>
                        </Box>

                        <Box className={classes.currentsale}>
                            <Box>
                                <Typography color={'#999'}>Total Coin Sales USD</Typography>
                                <Typography variant="h6" color={'#fff'} fontWeight={500}>$46,665,598.67</Typography>
                            </Box>
                            <Box>
                                <Image src={coinline} alt={""} />
                            </Box>
                            <Box textAlign={'end'}>
                                <Typography color={'#999'}>Total Coins Sold</Typography>
                                <Typography variant="h6" color={'#fff'} fontWeight={500}>11,261,282,602.79</Typography>
                            </Box>
                        </Box>

                        <Box mt={3} mb={0.5}>
                            <Image className={classes.slider__img} src={slider2} alt={""} />
                        </Box>
                        <Box className={classes.currentsale2}>
                            <Typography variant="h6" fontWeight={500}>0.05 USDT = 1 MMCT</Typography>
                            <Typography variant="h6" fontWeight={500}>Pre-Sale: 0.1 USDT</Typography>
                        </Box>

                        <Box className={classes.rama__log}>
                            <Image src={rmesta} alt={""} />
                            <Typography variant="h5" fontWeight={500}>RAMA</Typography>
                        </Box>
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
                                placeholder={'Enter Amount'}
                                type={''}
                            />
                            <Link className={classes.max_btn} href={""}>Max</Link>
                        </Box>
                        <Box className={classes.worth}>
                            <Image src={shield} alt={""} width={50} />
                            <Typography color={'#999'}>MMCT WORTH : <Typography component={'span'} color={'#fff'}>0.00</Typography></Typography>
                        </Box>

                        <Link className={classes.buy__btn} href={"#"}>Buy Coins</Link>
                    </Box>
                </Box>


                <Box>
                    <Grid container spacing={2} mt={1}>
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                            <Box className={classes.step__four}>
                                <Typography color={'#999'}>YOUR LAST TRANSACTIONS</Typography>
                                <Typography color={'#fff'}>There are no finalized transactions yet.</Typography>
                            </Box>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12}>
                            <Box className={classes.step__four2}>
                                <Box className={classes.referral}>
                                    <Box>
                                        <Typography color={'#999'}>YOUR REFERRALS</Typography>
                                        <Typography color={'#fff'} variant="h4">0</Typography>
                                    </Box>
                                    <Box>
                                        <Image src={r1} alt={""} />
                                    </Box>
                                </Box>

                                <Box className={classes.referral}>
                                    <Box>
                                        <Typography color={'#999'}>YOUR REFERRAL EARNINGS</Typography>
                                        <Typography color={'#fff'} variant="h4">0</Typography>
                                    </Box>
                                    <Box>
                                        <Image src={r2} alt={""} />
                                    </Box>
                                </Box>

                                <Box className={classes.ref__link}>
                                    <AddressCopy text={"0x7413b59f86635414b5ff609662eb92f7bf202ae6"} address={"https://ico.dashboard.mumblechat.com/?ref=0x7..ae6"} />
                                    <Link href={"#"}><Image src={linkbtnimg} alt={""} /></Link>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

        </>
    )
}

export default Dsboard