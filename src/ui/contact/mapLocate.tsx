import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ContactForm from './contactForm';


 

const useStyles = makeStyles({

    box: {
        backgroundColor: '#0f101e',
        border: '1px solid #ffffff17',
        padding: '1.5rem',
        borderRadius: '12px',
        textAlign: 'center',
        height: '100%'
    },
    mainBox: {
        margin: '4rem 1.5rem 0rem 1.5rem'
    },
    iframe:{
            width:'100%',
            height:'100%'   
    },
    mainBox_bg:{
        backgroundColor:'#0f101e',
        padding:'1rem',
        borderRadius:'12px'
    }


});

const MapLocate = () => {
    const classes = useStyles();


    return (
        <>
            <Box className={classes.mainBox}>
                <Box className={classes.mainBox_bg}>
                <Grid container spacing={2}>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                    <Box className={classes.iframe}><iframe  src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"  loading="lazy" style={{width:'100%', height:'100%'}} ></iframe></Box>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <ContactForm/>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </>
    );
};

export default MapLocate;
