'use client'
import { Box, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import disconnect from '../../icons/disconnect.svg'
import DashboardSidebar from "./dashboardSidebar";
import backbtn from '../../icons/backbtn.svg'
import { useAccountModal, useChainModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const useStyles = makeStyles({

    mainDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1D1D20',
        padding: '10px 40px',
        height: '74px',
        position:'sticky',
        backgroundColor: '#080808',
        top:'0px',
        '@media(max-width : 900px)':{
            padding:'10px 20px',
            flexDirection:'row-reverse'
        }
    },
    dis__connect: {
        display: 'block'
    },
    bthome:{
        color:'#fff',
        textDecoration:'none',
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    texthdr:{
        '@media(max-width : 900px)':{
            display:'none'
        }
    }

});

const DashboardHeader = () => {
    const classes = useStyles();
    const { openAccountModal } = useAccountModal();
    const router = useRouter()

    const {isDisconnected}=useAccount();
    
    useEffect(()=>{
        if(isDisconnected){
            router.push("/")
        }
    },[isDisconnected])
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box sx={{display:'none','@media(max-width : 900px)':{display:'block'}}}>
                    <DashboardSidebar/>
                </Box>
                <Box><Link className={classes.bthome} href={"/"}><Image src={backbtn} alt={""}/>Back to home</Link></Box>
                <Box className={classes.texthdr}><Typography fontSize={20} fontWeight={300}>Welcome to Mumblechat Dashboard!</Typography></Box>
                <Box className={classes.texthdr}>
                    <Link onClick={openAccountModal} href={""}>
                        <Image src={disconnect} alt={""} className={classes.dis__connect} />
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default DashboardHeader