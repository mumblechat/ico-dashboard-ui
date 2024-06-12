import AddressCopy from "@/theme/components/addressCopy";
import Modal from "@/theme/components/modal";
import { Box } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";

import { useAccount } from "wagmi";


const useStyles = makeStyles({

    ref__link: {
        backgroundColor: '#00FFFF',
        padding: '0.5rem 1rem',
        borderRadius: '0px 0px 8px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
        '@media(max-width : 1200px)': {
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },


});

const RefBottom = () => {
    const classes = useStyles();
    const { address } = useAccount();
    return (
        <>
            <Box className={classes.ref__link}>
                <AddressCopy text={address} address={"https://ico.dashboard.mumblechat.com/?ref=0x7..ae6"} />
              <Modal/>
            </Box>
        </>
    )
}

export default RefBottom