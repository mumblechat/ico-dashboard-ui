import { Box, Grid, IconButton, InputBase, Tooltip, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import CalculateTab from "./calculateTab";
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';
import m1 from '../../icons/m1.svg'
import m2 from '../../icons/m2.svg'
import m3 from '../../icons/m3.svg'
import m4 from '../../icons/m4.svg'
import Image from "next/image";

const useStyles = makeStyles({
    coin__lunch: {
        textAlign: 'center',
    },
    mainDiv: {
        padding: '1.5rem',
    },
    mainBox: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        padding: '1rem'
    },
    sBox: {
        backgroundColor: '#000',
        border: '1px solid #1D1D20',
        padding: '10px',
        borderRadius: '4px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    mmcttool: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    }

});

const MMCTBOX = [
    {
        id: 1,
        Title: '1',
        date: '200.00',
        mmct: '20',
        icon:m1,
    },
    {
        id: 2,
        Title: '10',
        date: '2k',
        mmct: '200',
        icon:m2,
    },
    {
        id: 3,
        Title: '30',
        date: '6k',
        mmct: '600',
        icon:m3,
    },
    {
        id: 4,
        Title: '100',
        date: '20k',
        mmct: '2000',
        icon:m4,
    },
]

const Miningcalculate = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.coin__lunch}>
                    <Typography fontSize={20} color={'#fff'}>Calculate your mining potential on all miners below</Typography>
                </Box>

                <Box className={classes.coin__lunch}>
                    <Typography color={'#fff'}>How many coins will I mine <Box component={'span'}><Link href={""} style={{ textDecoration: 'none', color: '#00FFFF' }}>per day?</Link></Box></Typography>
                </Box>


              <Box mt={5}>
              <Grid container spacing={2}>
                    {MMCTBOX.map((item, index) => (
                        <Grid key={index} item lg={3} md={6} sm={6} xs={12}>
                            <Box className={classes.mainBox}>
                                <Box className={classes.sBox}>
                                    <Image src={item.icon} alt={""}/>
                                </Box>
                                <Box className={classes.mmcttool}>
                                    <Box><Typography color={'#fff'}>MMCTX{item.Title}</Typography></Box>
                                    <Tooltip title="MMCT">
                                        <IconButton>
                                            <InfoIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Typography variant="h4" color={'#fff'} fontWeight={500}>$ {item.date}</Typography>
                                    <Typography variant="h6" color={'#fff'} fontWeight={300}>{item.mmct} MMCT</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
              </Box>


                <CalculateTab />
            </Box>
        </>
    )
}

export default Miningcalculate