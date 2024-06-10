import Heading from "@/theme/components/heading";
import Image from "next/image";
import breadcrumb_shape01 from '../../icons/breadcrumb_shape01.png'
import breadcrumb_shape02 from '../../icons/breadcrumb_shape02.png'
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const useStyles = makeStyles({

    dotBox: {
        textAlign: 'center'
    },
    dotBox2: {
        textAlign: 'center',
        marginTop:'8rem'
    },
    link__url: {
        color: '#999',
        textDecoration: 'none',
        transition:'0.5s',
        '&:hover':{
            color:'#fff'
        }
    },
    box__flex: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    dotBox_center: {
        textAlign: 'center',
        marginTop: '2rem'
    },
    mainBox:{
        marginTop:'5rem'
    }

});


interface props{
    heading:string;
    text:string;
    home:string;
}


const BnrRegister = ({heading,text,home}:props) => {
    const classes = useStyles();
    return (
        <>


            <Box className={classes.mainBox}>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box className={classes.dotBox}>
                            <Image src={breadcrumb_shape01} alt="" />
                        </Box>

                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>

                        <Box className={classes.dotBox_center}>
                            <Heading heading={heading} />
                            <Box className={classes.box__flex}>
                                <Link className={classes.link__url} href={"/"}>{home}</Link>
                                <KeyboardArrowRightIcon />
                                <Typography>{text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box  className={classes.dotBox2}>
                            <Image src={breadcrumb_shape02} alt="" />
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default BnrRegister;


