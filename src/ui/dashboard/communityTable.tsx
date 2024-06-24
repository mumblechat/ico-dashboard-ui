import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import t1 from '../../icons/r2.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";


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

});



const CommunityTable = () => {

    const classes = useStyles();


    const TableList = [
        {
            id: 1,
            ProfileAddress: "0xcc5...be31",
            RAMA: '5',
            MMCT: '15.2'
        },
        {
            id: 2,
            ProfileAddress: "0xcc5...be31",
            RAMA: '3',
            MMCT: '9.12'
        },
        {
            id: 3,
            ProfileAddress: "0xcc5...be31",
            RAMA: '2',
            MMCT: '6.08'
        },
        {
            id: 4,
            ProfileAddress: "0xcc5...be31",
            RAMA: '6',
            MMCT: '18.24'
        },
        {
            id: 5,
            ProfileAddress: "0xcc5...be31",
            RAMA: '8',
            MMCT: '24.32'
        },

        {
            id: 6,
            ProfileAddress: "0xcc5...be31",
            RAMA: '7',
            MMCT: '21.28'
        },

        {
            id: 7,
            ProfileAddress: "0xcc5...be31",
            RAMA: '2',
            MMCT: '6.08'
        },
        {
            id: 8,
            ProfileAddress: "0xcc5...be31",
            RAMA: '5',
            MMCT: '15.2'
        },
        {
            id: 9,
            ProfileAddress: "0xcc5...be31",
            RAMA: '3',
            MMCT: '9.12'
        },
        {
            id: 10,
            ProfileAddress: "0xcc5...be31",
            RAMA: '5',
            MMCT: '15.2'
        },
        

    ]






    return (

        <>
            <Box mt={2}>

                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 400, backgroundColor: '#080808', borderRadius: '0px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#101012' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} >Users</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Amount</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="right">Quantity</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} component="th" scope="row">
                                        <Box sx={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        }}>
                                            {/* <Box>
                                                <Image src={item.Userprofile} alt={""} />
                                            </Box> */}
                                            <Box sx={{display:'flex',alignItems:'center', gap:'0.5rem'}}>
                                                <Image src={t1} alt={""} width={44} />
                                                <Typography color={'#fff'}>{item.ProfileAddress}</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="left">

                                        <Typography color={'#fff'}>{item.RAMA} RAMA</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="right">

                                        <Typography color={'#fff'}>{item.MMCT} MMCT</Typography>
                                    </TableCell>


                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default CommunityTable