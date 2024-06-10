import { Box, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import disconnect from '../../icons/disconnect.svg'

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
        top:'0px'
    },
    dis__connect: {
        display: 'block'
    }

});

const DashboardHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box><Typography fontSize={20} fontWeight={300}>Welcome to Mumblechat Dashboard!</Typography></Box>
                <Box>
                    <Link href={""}>
                        <Image src={disconnect} alt={""} className={classes.dis__connect} />
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default DashboardHeader