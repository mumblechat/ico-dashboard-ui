import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Rewards from "./rewards";
import features_img01 from '../../icons/features_img01.svg'
import features_img02 from '../../icons/features_img02.svg'
import features_img03 from '../../icons/features_img03.svg'
import features_img04 from '../../icons/features_img04.svg'


const useStyles = makeStyles({
    mainBox: {
        textAlign: 'center',
        '@media(max-width : 600px)':{
            flexWrap:'flex',
            flexDirection:'column-reverse',
            textAlign:'center'
        }
    },
    mainBoxWrap:{
        padding:'5rem 2rem 1rem 2rem',
        '@media(max-width : 600px)':{
            padding:'2rem 1rem 1rem 1rem',
        }
    }
})



const Platform = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBoxWrap}>
                <Box className={classes.mainBox}>
                    <Heading heading={'Revolutionary ICO Platform with Exclusive'} />
                    <Heading heading={'Rewards Program'} />
                </Box>
                <Box sx={{
        width: '50%',
        height: '1px',
        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
        margin: '3rem auto 3rem auto',
        '@media(max-width : 600px)':{
                        margin: '1.5rem auto 1.5rem auto', 
                    }
      }} />
                <Grid container spacing={2}>
                    <Rewards reward_hding={'Mobile Payment Make Easy'} reward_text={'Add new, trending and rare artwork to your collection.'} Image_r={features_img01} />
                    <Rewards reward_hding={'Lifetime Free Transaction'} reward_text={'Add new, trending and rare artwork to your collection.'} Image_r={features_img02} />
                    <Rewards reward_hding={'Protect the Identity'} reward_text={'Add new, trending and rare artwork to your collection.'} Image_r={features_img03} />
                    <Rewards reward_hding={'Security & Control Over Money'} reward_text={'Add new, trending and rare artwork to your collection..'} Image_r={features_img04} />
                </Grid>

            </Box>
        </>
    )
}

export default Platform
