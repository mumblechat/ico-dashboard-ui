import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import p1 from '../../icons/p1.svg'
import p2 from '../../icons/p2.svg'
import p3 from '../../icons/p3.svg'
import p4 from '../../icons/p4.svg'
import p5 from '../../icons/p5.svg'
import p6 from '../../icons/p6.svg'
import Image from "next/image";






const Tablereferral = () => {




    const TableList = [
        {
            id: 1,
            Userprofile: p1,
            ProfileAddress: "0xcc5...be31",
            Bonus: '57',
            Profit: '1,021',

        },
        {
            id: 2,
            Userprofile: p2,
            ProfileAddress: "0x2eb...7176",
            Bonus: '10',
            Profit: '1,210',

        },
        {
            id: 3,
            Userprofile: p3,
            ProfileAddress: "0x614...7419",
            Bonus: '22',
            Profit: '1,252',

        },
        {
            id: 4,
            Userprofile: p4,
            ProfileAddress: "0x247...12a3",
            Bonus: '37',
            Profit: '1,345',

        },
        {
            id: 5,
            Userprofile: p5,
            ProfileAddress: "0xe7d...31e2",
            Bonus: '29',
            Profit: '1,879',

        },
        {
            id: 6,
            Userprofile: p6,
            ProfileAddress: "0x6ac...0be7",
            Bonus: '12',
            Profit: '18,521',

        },

    ]






    return (

        <>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor:'#080808',border:'1px solid #1D1D20',borderRadius:'12px' }} aria-label="simple table">
                        <TableHead sx={{backgroundColor:'#101012'}}>
                            <TableRow>
                                <TableCell sx={{borderBottom:'1px solid #1D1D20',fontSize:18,color:'#fff'}}>Users</TableCell>
                                <TableCell sx={{borderBottom:'1px solid #1D1D20',fontSize:18,color:'#fff'}} align="left">Bonus</TableCell>
                                <TableCell sx={{borderBottom:'1px solid #1D1D20',fontSize:18,color:'#fff'}} align="right">Profit</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{borderBottom:'1px solid #1D1D20',padding:1,color:'#fff'}} component="th" scope="row">
                                        <Box sx={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        }}>
                                            <Image src={item.Userprofile} alt={""} />
                                            <Typography>{item.ProfileAddress}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{borderBottom:'1px solid #1D1D20',padding:1,color:'#fff'}} align="left">{item.Bonus} %</TableCell>
                                    <TableCell sx={{borderBottom:'1px solid #1D1D20',padding:1,color:'#fff'}} align="right">$ {item.Profit}</TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default Tablereferral