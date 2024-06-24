import { Box, Typography, } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Heading from "@/theme/components/heading";
import RefBottom from "../dashboard/refBottom";
import Image from "next/image";
import rmesta from '../../icons/rmesta.svg'



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
    profile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    js_Reigns: {
        padding: '1.5rem',
        '@media(max-width : 600px)': {
            padding: '0.5rem',
        }
    }



});




const Profile = () => {
    const classes = useStyles();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Heading heading={"Profile"} />
                <Box border={'1px solid #1D1D20'} borderRadius={'8px'} mt={3}>
                    <Box className={classes.js_Reigns}>
                        <Box className={classes.profile}>
                            <Image src={rmesta} alt={""} />
                            <Typography color={'#999'}>Rank: <Typography component={'span'} color={'#fff'}>Silver</Typography></Typography>
                        </Box>
                        <Typography sx={{
                            '@media(max-width : 600px)': {
                                fontSize: 11.7
                            }
                        }} mt={1.5} color={'#fff'}>0xbE97d054CB8f0Af6524Beb00a3AB3a97e5676A5d</Typography>
                    </Box>
                    <RefBottom />
                </Box>

            </Box>

        </>
    )
}

export default Profile