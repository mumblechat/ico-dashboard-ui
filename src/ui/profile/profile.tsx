import { Box, Typography, } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Heading from "@/theme/components/heading";
import RefBottom from "../dashboard/refBottom";
import Image from "next/image";
import r2 from '../../icons/r2.svg'
import { useAccount, useChainId, useReadContract } from "wagmi";
import AddressCopy from "@/theme/components/addressCopy";
import { Address } from "viem";
import { mmctReferralAbi } from "@/configs/abi/mmctReferral";
import { mmctContractAddresses } from "@/configs";



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
        padding: '0.7rem',
        '@media(max-width : 600px)': {
            padding: '0.5rem',
        }
    }



});




const Profile = () => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()
    const resultOfReferrer = useReadContract({
        abi: mmctReferralAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
        functionName: 'getReferrer',
        args: [address as Address]
    })
    return (
        <>

            <Box className={classes.mainDiv}>
                <Heading heading={"Profile"} />
                <Box border={'1px solid #1D1D20'} borderRadius={'8px'} mt={3}>
                    <Box className={classes.js_Reigns}>
                        <Box className={classes.profile}>
                            <Image src={r2} alt={""} />
                            <Typography color={'#999'}>Rank: <Typography component={'span'} color={'#fff'}>1</Typography></Typography>
                        </Box>
                        {/* <Typography sx={{
                            '@media(max-width : 600px)': {
                                fontSize: 11.7
                            }
                        }} mt={1.5} color={'#fff'}>{address ?? ''}</Typography> */}
                        <AddressCopy
                            textColor="#00ffff"
                            hrefLink={
                                chainId === 1370 ? `https://ramascan.com/address/${address}` :
                                    `https://pingaksha.ramascan.com/address/${address}`
                            }
                            text={address as string}
                            addresstext={address as Address} />
                    </Box>
                    {
                        resultOfReferrer?.data && <Box className={classes.js_Reigns}>

                            {/* <Typography sx={{
                            '@media(max-width : 600px)': {
                                fontSize: 11.7
                            }
                        }} mt={1.5} color={'#fff'}>{address}</Typography> */}
                            <Typography color={'#999'}>You Referred By:</Typography>
                            <AddressCopy
                                textColor="#00ffff"
                                hrefLink={
                                    chainId === 1370 ? `https://ramascan.com/address/${resultOfReferrer?.data}` :
                                        `https://pingaksha.ramascan.com/address/${resultOfReferrer?.data}`
                                }
                                text={resultOfReferrer?.data as string}
                                addresstext={resultOfReferrer?.data as Address} />
                        </Box>
                    }
                    <RefBottom />
                </Box>

            </Box>

        </>
    )
}

export default Profile