"use client"
import { Box, Grid, InputBase, Slider, styled, Typography } from "@mui/material"
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
import Refer from "./refer";
import { useState } from "react";

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
         
        '@media(max-width : 1200px)':{
            margin: '20px 20px 20px 20px',
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
        alignItems: 'center',
        '@media(max-width : 600px)':{
            flexWrap:'wrap',
            justifyContent:'center'
        }
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        '@media(max-width : 1200px)':{
            gap:'1.5rem',
            '@media(max-width : 600px)':{
            flexWrap:'wrap',
            justifyContent:'center',
            gap:'0.5rem',
        }
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
        marginTop: '2rem',
        '@media(max-width : 600px)':{
            flexWrap:'wrap',
            justifyContent:'center'
        }
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
        padding: '0rem 2rem 1rem 2rem',
       '@media(max-width : 600px)':{
            padding:'0rem 1rem 1rem 1rem'
        }
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
    },
    coinlinewrp:{
        '@media(max-width : 600px)':{
            display:'none'
        }
    },
    sliderBox:{
        width: '550px',
        '& .MuiSlider-root': {
          backgroundColor: '#fff !important',
          padding: '16px',
        },
        '& .MuiSlider-rail': {
          background: 'linear-gradient(90deg, #080808, #00FFFF)',
          padding: '12px',
        },
        '& .MuiSlider-track': {
          background: 'linear-gradient(0deg, #fff, #fff)',
        },
        '& .MuiSlider-thumb': {
          background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
          padding: '20px',
        },
        '@media(max-width : 1200px)':{
            width: '400px',
            '@media(max-width : 900px)':{
            width: '350px',
            '@media(max-width : 900px)':{
                width: '300px',
            }
        }
        }
    },
    sliderBox2:{
        
        '& .MuiSlider-root': {
          backgroundColor: '#fff !important',
          padding: '24px',
        },
        '& .MuiSlider-rail': {
          background: 'linear-gradient(90deg, #080808, #00FFFF)',
          padding: '20px',
        },
        '& .MuiSlider-track': {
          background: 'linear-gradient(0deg, #fff, #fff)',
        },
        '& .MuiSlider-thumb': {
          background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
          padding: '24px',
        },
         
         
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
    const [value, setValue] = useState<number[]>([10,]);

    const [value2, setValue2] = useState<number[]>([98,]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleChange2 = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number[]);
    };
    return (
        <>
           <Box>
           
           </Box>
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
                            <Typography color={'#fff'}>Ramestta</Typography>
                        </Box>

                        <Box sx={{
                     
                    
                    marginBottom: '1rem'
                }}>
                     <Box sx={{textAlign:'center', marginBottom:1}}><Typography fontFamily={'Bruce Forever!important'} color={'#00ffff'}>{value}%</Typography></Box>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="range-slider"
                        min={0}
                        max={100}
                        className={classes.sliderBox}
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            borderRadius: '30px',
                            padding:'10px 10px 10px 0px',
                            '&.Mui-active': {
                                boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                            },
                        }}
                    />
                   

                </Box>

                        <Box className={classes.box__logo}>
                            <Typography color={'#fff'}>Mumblechat</Typography>
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
                                    <Typography color={'#fff'} fontWeight={500} variant="h4">{item.data}</Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>

                <Box className={classes.step__three}>
                    <Box className={classes.coin_hding}>
                        <Typography variant="h5" color={'#fff'}>Buy Coins</Typography>
                    </Box>
                    <Box className={classes.middleBox}>

                        <Box textAlign={'center'} mt={3}>
                            <Typography>  <Typography component={'span'} color={'#fff'}>Private Sale</Typography></Typography>
                        </Box>

                        <Box className={classes.currentsale}>
                            <Box>
                                <Typography color={'#999'}>Total Coin Sales USD</Typography>
                                <Typography variant="h6" color={'#fff'} fontWeight={500}>$46,665,598.67</Typography>
                            </Box>
                            <Box>
                                <Image className={classes.coinlinewrp} src={coinline} alt={""} />
                            </Box>
                            <Box textAlign={'end'}>
                                <Typography color={'#999'}>Total Coins Sold</Typography>
                                <Typography variant="h6" color={'#fff'} fontWeight={500}>11,261,282,602.79</Typography>
                            </Box>
                        </Box>

                        <Box mt={3} mb={0.5} sx={{position:'relative'}}>
                        <Box sx={{textAlign:'center', marginBottom:1,position:'absolute',left:10,top:1,zIndex:'1'}}><Typography   color={'#fff'}> Remaining:{value2}M</Typography></Box>
                        <Slider
                        value={value2}
                        onChange={handleChange2}
                        aria-labelledby="range-slider"
                        min={0}
                        max={100}
                        className={classes.sliderBox2}
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            borderRadius: '30px',
                            padding:'10px 10px 10px 0px',
                            '&.Mui-active': {
                                boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                            },
                        }}
                    />
                        </Box>
                        <Box className={classes.currentsale2}>
                            <Typography variant="h6" fontWeight={500} color={'#fff'}>0.05 USDT = 1 MMCT</Typography>
                            <Typography variant="h6" fontWeight={500} color={'#fff'}>Pre-Sale: 0.1 USDT</Typography>
                        </Box>

                        <Box className={classes.rama__log}>
                            <Image src={rmesta} alt={""} />
                            <Typography variant="h5" fontWeight={500} color={'#fff'}>RAMA</Typography>
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
                                placeholder={'Enter Amount in RAMA'}
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


                <Refer/>

            </Box>

        </>
    )
}

export default Dsboard