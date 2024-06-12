import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography, styled, useTheme } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";
import Heading from "@/theme/components/heading";



const Accordion_list = [
    {
        id: 1,
        title: 'What is the ICO?',
        text: 'LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.'
    },
    {
        id: 2,
        title: 'What is the ICO?',
        text: 'mumblechat is currently supporting all EVM (e.g., Ramestta, Ethereum, Binance Smart Chain, Polygon,RAMESTTA etc.), and we have plans to expand to other blockchains like Solana, Cosmos, Flow, Aptos, and Sui in the coming future.'
    },
    {
        id: 3,
        title: 'How can I connect API with my Current Site',
        text: 'We deliver messages via "Communication Delivery Graph", which is a decentralized encryption network designed to protect the privacy of our users. '
    },
    {
        id: 4,
        title: 'What is the Payment Mathod',
        text: 'We use both decentralized storage (e.g. IPFS, Arweave, etc.) and your local device. No messaging data will be stored on-chain due to security risks.'
    },
    {
        id: 5,
        title: 'What makes Less Accounting better than the rest?',
        text: "mumblechat points indicate your level of engagement as a mumblechat user. We use the points to determine a user's eligibility for future rewards such as token airdrops."
    },

]


const StyledBox = styled(Box)(({ theme }) => ({
    margin: '0rem 4rem',
    '@media(max-width : 600px)': {
        margin: '0rem 1.5rem',
    }

}));

const Faqs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: any | any | ((prevState: any) => any)) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <StyledBox>


                <Box sx={{ textAlign: 'center', margin: '4rem 0rem 2rem 0rem' }}>
                    <Heading heading={"Ask Quick Question"} />
                    <Box sx={{
                        width: '30%',
                        height: '1px',
                        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                        margin: '3rem auto 3rem auto',
                        '@media(max-width : 600px)': {
                            margin: '1.5rem auto 1.5rem auto',
                        }
                    }} />
                </Box>
                <Grid container spacing={2}>

                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        {Accordion_list.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}` as any}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    backgroundColor: '#1C1C20',
                                    borderRadius: '6px',
                                    boxShadow: 'inherit',
                                    marginTop: '1rem',
                                    padding: '5px',
                                    '&.Mui-expanded': {
                                        background: 'linear-gradient(359deg, #00FFFF, #00FFFF)',
                                        marginTop: '1rem',
                                        color: '#000'
                                    },
                                }}>
                                <AccordionSummary

                                    sx={{
                                        fontWeight: 700,
                                        color: expanded === `panel${index}` as any ? '#000' : '#fff',
                                    }}
                                    expandIcon={<SouthIcon sx={{ color: expanded === `panel${index}` as any ? '#000' : '#fff' }} />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}

                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails>

                                    {item.text}

                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Grid>

                </Grid>

            </StyledBox>

            <Box sx={{
                padding: '5rem 0rem',
                '@media(max-width : 900px)': {
                    padding: '2rem 0rem',
                }
            }}>

            </Box>
        </>
    )
}

export default Faqs


