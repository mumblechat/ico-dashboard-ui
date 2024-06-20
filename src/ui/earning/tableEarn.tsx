import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import mmct from '../../icons/Sheild.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import { convertToNumber } from "@/lib/convertToNumber";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import shortenString from "@/lib/shortenString";
import { useAccount, useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { mmctStakingAbi } from "@/configs/abi/mmctStaking";
import { formatTier, mmctContractAddresses } from "@/configs";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
 

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

const TableEarn = ({resultOfUserStakedList}:{resultOfUserStakedList:any}) => {
    const classes = useStyles();

    const {address} = useAccount()
    const chainId = useChainId()

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

    const Reward = ({index}:{index:number})=>{
        const mintReward = useReadContract({
            abi: mmctStakingAbi,
            address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
            functionName: 'calculateMintRewards',
            args: [address as Address,BigInt(index)],
            account: zeroAddress
        })
        return(
            <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
            <Typography color={'#fff'}>{Number(mintReward?.data)>0?Number(formatEther?.(BigInt?.(mintReward?.data ? mintReward.data.toString() : 0))).toFixed(4):'0.00'} MMCT</Typography>
            <Typography color={'#999'}>${Number(mintReward?.data)>0?(Number(formatEther?.(BigInt?.(mintReward?.data ? mintReward.data.toString() : 0))) * 0.05).toFixed(4):'0.00'}</Typography>
           </TableCell>
        )
    }

    const { writeContractAsync,data,isPending:isPendingClaimForWrite } = useWriteContract()
    const {isLoading,isSuccess} = useWaitForTransactionReceipt({
        hash: data,
      })


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
                        { resultOfUserStakedList?.length>0 && resultOfUserStakedList.map((item:any, index:number) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <Image src={TableList[index].Userprofile} alt={""} width={50} />
                                        <Typography>{shortenString(address as Address)}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{convertToAbbreviated(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0)))} MMCT</Typography>
                                    <Typography color={'#999'}>{formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) * 0.05)}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{formatTier(Number(item.tier))}</Typography>
                                    
                                </TableCell>
                                <Reward index={index}/>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{new Date(Number(item?.startTime)*1000).toLocaleString()}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{new Date(Number(item?.lastClaimTime)*1000).toLocaleString()}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right">
                                    <Box className={classes.stakebtn__wrp}>
                                        <Button 
                                        disabled={
                                            isPendingClaimForWrite || isLoading
                                        }
                                        className={classes.stakebtn}
                                        onClick={async()=>{
                                            await writeContractAsync({
                                                abi: mmctStakingAbi,
                                                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
                                                functionName: 'claimRewards',
                                                args: [BigInt(index)],
                                                account: address
                                             })
                                        }}
                                        >Claim</Button>
                                        <Button className={classes.stakebtn} >Unstake</Button>
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
