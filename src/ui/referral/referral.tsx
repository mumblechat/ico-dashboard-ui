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
import Refer from "../dashboard/refer";
import Tablereferral from "./tablereferral";
import { useAccount, useChainId, useReadContracts } from "wagmi";
import { mmctReferralAbi } from "@/configs/abi/mmctReferral";
import { mmctContractAddresses } from "@/configs";
import { Address } from "viem";

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
    }



});




const Referral = () => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()

    const resultOfReferralDetail = useReadContracts({
        contracts: [
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'getReferralRewards',
                args: [address as Address]
            },
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'getReferralsCount',
                args: [address as Address]
            },
        ]
    })
    return (
        <>

            <Box className={classes.mainDiv}>
                <Heading heading={"Referral"} />
                <Refer resultOfReferralDetail={resultOfReferralDetail} />
                <Box sx={{ marginTop: '1rem' }}>
                    <Tablereferral />
                </Box>

            </Box>

        </>
    )
}

export default Referral