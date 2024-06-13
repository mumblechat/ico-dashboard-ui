import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import mmct from '../../icons/Sheild.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import { convertToNumber } from "@/lib/convertToNumber";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
 

const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100, 
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
            borderRadius: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1D1D20',
            borderRadius: '10px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    stakebtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #00ffff',
        color: '#00ffff',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff',
            color: '#000'
        }
    },
    stakebtn__wrp: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'end'
    }
});

const TableEarn = () => {
    const classes = useStyles();

    const TableList = [
        {
            id: 1,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Starter'
        },
        {
            id: 2,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Silver'
        },
        {
            id: 3,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Gold'
        },
        {
            id: 4,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Platinum'
        },
        {
            id: 5,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Daimond'
        },
        {
            id: 6,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            stakeAmount: 8000,
            stakeDate: '0.00',
            reward: '100',
            rewardData: '0.00',
            startTime: 'Jun 12 2024 23:11:38 PM',
            lastClaim: 'Jun 12 2024 23:11:38 PM',
            tier:'Elite'
        },
         
    ];

    return (
        <Box>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table sx={{ minWidth: 1500, backgroundColor: '#080808', border: '1px solid #1D1D20', borderRadius: '4px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#101012' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }}>Users</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Staked Amount</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Tier</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Reward</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Start Time</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Last Claimed</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TableList.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <Image src={item.Userprofile} alt={""} width={50} />
                                        <Typography>{item.ProfileAddress}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{convertToAbbreviated(item.stakeAmount)} MMCT</Typography>
                                    <Typography color={'#999'}>$ {item.stakeDate}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{item.tier}</Typography>
                                    
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{item.reward} MMCT</Typography>
                                    <Typography color={'#999'}>$ {item.rewardData}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{item.startTime}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{item.lastClaim}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right">
                                    <Box className={classes.stakebtn__wrp}>
                                        <Link className={classes.stakebtn} href={""}>Claim</Link>
                                        <Link className={classes.stakebtn} href={""}>Unstake</Link>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default TableEarn;
