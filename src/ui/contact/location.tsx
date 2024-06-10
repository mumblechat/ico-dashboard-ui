import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import icon01 from '../../icons/icon01.svg'
import icon02 from '../../icons/icon02.svg'
import icon03 from '../../icons/icon03.svg'
import icon04 from '../../icons/icon04.svg'


const Card =[
    {
        Image:icon01,
        Title:'Location',
        text:'1901 Thornridge Cir.',
        text2:'Shiloh, Hawaii'
    },
    {
        Image:icon02,
        Title:'Contact',
        text:'+88(0) 555-0108',
        text2:'+88(0) 555-01117'
    },
    {
        Image:icon03,
        Title:'Email',
        text:'sara.cruz@example.com',
        text2:'xeco.@example.com'
    },
    {
        Image:icon04,
        Title:'Visit Between',
        text:'Mon - Sat : 8.00-5.00',
        text2:'Sunday : Closed'
    },
]

const useStyles = makeStyles({

    box:{
        backgroundColor:'#0f101e',
        border:'1px solid #ffffff17',
        padding:'1.5rem',
        borderRadius:'12px',
        textAlign:'center',
        height:'100%'
    },
    mainBox:{
        margin:'4rem 1.5rem 0rem 1.5rem'
    }


});

const Location = () => {
    const classes = useStyles();
    

    return (
        <>
        <Box className={classes.mainBox}>
            <Grid container spacing={2}>
                {Card.map((item,index)=>(
                    <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                    <Box className={classes.box}>
                        <Image src={item.Image} alt={''}/>
                        <Typography variant='h6'>{item.Title}</Typography>
                        <Typography fontSize={20} color={'#999'}>{item.text}</Typography>
                        <Typography fontSize={20} color={'#999'}>{item.text2}</Typography>
                    </Box>
                </Grid>
                ))}
                
            </Grid>
        </Box>
        </>
    );
};

export default Location;
