import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import t1 from '../../icons/t1.svg'

import Image from "next/image";






const TableTransaction = () => {




    const TableList = [
        {
            id: 1,
            Userprofile: t1,
            ProfileAddress: "0xcc5...be31",
            Bonus: '1 min ago',
            Profit: '1,021',
            MMCT: '12'

        },
        {
            id: 2,
            Userprofile: t1,
            ProfileAddress: "0x2eb...7176",
            Bonus: '4 min ago',
            Profit: '1,210',
            MMCT: '42'

        },
        {
            id: 3,
            Userprofile: t1,
            ProfileAddress: "0x614...7419",
            Bonus: '3 min ago',
            Profit: '1,252',
            MMCT: '18'

        },
        {
            id: 4,
            Userprofile: t1,
            ProfileAddress: "0x247...12a3",
            Bonus: '2 min ago',
            Profit: '1,345',
            MMCT: '63'
        },
        {
            id: 5,
            Userprofile: t1,
            ProfileAddress: "0xe7d...31e2",
            Bonus: '1 min ago',
            Profit: '1,879',
            MMCT: '100'
        },
        {
            id: 6,
            Userprofile: t1,
            ProfileAddress: "0x6ac...0be7",
            Bonus: '3 hours ago',
            Profit: '18,521',
            MMCT: '36'
        },

    ]






    return (

        <>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#080808', borderRadius: '12px' }} aria-label="simple table">

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
                                            <Box>
                                                <Image src={item.Userprofile} alt={""} />
                                            </Box>
                                            <Box>
                                                <Typography color={'#fff'}>{item.MMCT} MMCT</Typography>
                                                <Typography color={'#999'}>{item.ProfileAddress}</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="right">
                                        <Typography>$ {item.Profit}</Typography>
                                        <Typography color={'#999'}>  {item.Bonus}</Typography>
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

export default TableTransaction