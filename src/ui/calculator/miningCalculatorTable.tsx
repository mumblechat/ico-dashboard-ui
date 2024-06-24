import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import t1 from '../../icons/t1.svg'
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



const MiningCalculatorTable = () => {

    const classes = useStyles();


    const TableList = [
        {
            id: 1,
            Userprofile: t1,
            ProfileAddress: "0xcc5...be31",
            Bonus: 'Total Transactions',
            Profit: '5',
            MMCT: '12'

        },


    ]






    return (

        <>
            <Box mt={5}>
                {/* <Typography>You Will </Typography> */}
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 400, backgroundColor: '#080808', borderRadius: '0px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#101012' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} >Per Hour Base Speed (%)</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Per Day</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Per Month</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="right">Per Year</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>


                            <TableRow

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
                                        <Box>

                                            <Typography color={'#fff'}>{0.0011}</Typography>
                                            <Typography fontSize={13} color={'#999'}>{0.0011} MMCT</Typography>
                                            <Typography fontSize={13} color={'#999'}>${0.0011}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="left">

                                    <Typography color={'#fff'}>{0.0264} </Typography>
                                    <Typography fontSize={13} color={'#999'}>{0.0011} MMCT</Typography>
                                    <Typography fontSize={13} color={'#999'}>${0.0011}</Typography>
                                </TableCell>

                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="left">

                                    <Typography color={'#fff'}>{0.792} </Typography>
                                    <Typography fontSize={13} color={'#999'}>{0.0011} MMCT</Typography>
                                    <Typography fontSize={13} color={'#999'}>${0.0011}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="right">

                                    <Typography color={'#fff'}>{9.636} </Typography>
                                    <Typography fontSize={13} color={'#999'}>{0.0011} MMCT</Typography>
                                    <Typography fontSize={13} color={'#999'}>${0.0011}</Typography>
                                </TableCell>


                            </TableRow>


                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default MiningCalculatorTable