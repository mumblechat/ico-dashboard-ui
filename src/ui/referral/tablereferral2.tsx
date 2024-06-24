import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import p1 from '../../icons/p1.svg'
import p2 from '../../icons/p2.svg'
import p3 from '../../icons/p3.svg'
import p4 from '../../icons/p4.svg'
import p5 from '../../icons/p5.svg'
import p6 from '../../icons/p6.svg'
import Image from "next/image";
import HoverTool from "@/theme/components/hoverTool";
import r2 from '../../icons/r2.svg'
import { makeStyles } from '@mui/styles';


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
})






const Tablereferral2 = () => {
    const classes = useStyles();



    const TableList = [
        {
            id: 1,
            Userprofile: p1,
            ProfileAddress: "0xcc5...be31",
            Bonus: '57',
            Profit: '1,021',
            sa: '10',
            level:'1'

        },
        {
            id: 2,
            Userprofile: p2,
            ProfileAddress: "0x2eb...7176",
            Bonus: '10',
            Profit: '1,210',
            sa: '10',
            level:'2'
        },
        {
            id: 3,
            Userprofile: p3,
            ProfileAddress: "0x614...7419",
            Bonus: '22',
            Profit: '1,252',
            sa: '10',
             level:'3'
        },
        {
            id: 4,
            Userprofile: p4,
            ProfileAddress: "0x247...12a3",
            Bonus: '37',
            Profit: '1,345',
            sa: '10',
             level:'4'
        },
        {
            id: 5,
            Userprofile: p5,
            ProfileAddress: "0xe7d...31e2",
            Bonus: '29',
            Profit: '1,879',
            sa: '10',
            level:'5'
        },
        {
            id: 6,
            Userprofile: p6,
            ProfileAddress: "0x6ac...0be7",
            Bonus: '12',
            Profit: '18,521',
            sa: '10',
            level:'Elite'
        },

    ]






    return (

        <>
            <Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#080808', border: '1px solid #1D1D20', borderRadius: '4px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#101012' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} >Users</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">SA <HoverTool Title={"Staking Amount"} /></TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">RE <HoverTool Title={"Referral Earning"}/></TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">level</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="right">EFY <HoverTool Title={"Earning From You"} /></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                        <Box sx={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        }}>
                                            <Image src={r2} alt={""} />
                                            <Typography>{item.ProfileAddress}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">{item.Bonus} %</TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">$ {item.sa}</TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">{item.id}</TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right">$ {item.Profit}</TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default Tablereferral2