"use client"
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import banner_bg from '../../icons/banner_bg.png'
import Bnr from "./bnr";
import Countribution from "./countribution";
import PartnerSlider from "./autoSlider";
import AutoSlider from "./autoSlider";
import Platform from "./platform";
import Conduct from "./conduct";
import Distribute from "./distribute";
import Roadmap from "./roadmap";
import Brick from "./brick";
import Faqs from "./faqs";
import Application from "./application";
import GetInTouch from "./getInTouch";
import Footer from "../shared/footer";











const Homecmp = () => {


    return (

        <>
            <Box
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Box sx={{
                    background: 'linear-gradient(180deg, #02b3b300, #02b3b317, #02B3B3)',
                    margin: '0rem 1.5rem',
                    padding: '0rem 1rem 1rem 1rem',
                    borderRadius: '0px 0px 20px 20px',
                }}>

                    <Header />
                    <Bnr />

                </Box>
                <Countribution />
                <Box
                    sx={{
                        padding: '3rem 0rem',
                        marginTop: '4rem'
                    }}
                >
                    <Box component={'section'} id="partner"><AutoSlider /></Box>
                </Box>

                <Box component={'section'} id="chart"> <Platform /></Box>
                <Conduct />
                <Distribute />
                <Box component={'section'} id="roadmap"><Roadmap /></Box>

                <Brick />
                <Box component={'section'} id="faq"><Faqs /></Box>

                <Application />
                <Box component={'section'} id="contact"><GetInTouch /></Box>

                <Footer />
            </Box>
        </>

    );
}


export default Homecmp