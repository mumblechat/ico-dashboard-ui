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
import HoverTool from "@/theme/components/hoverTool";



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
    claimbtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #00ffff !important',
        color: '#00ffff !important',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff !important',
            color: '#000 !important'
        }
    },
    claimbtn__wrp: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'end',
        margin:"7px"
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#080808'
    }
});

const TableCummunityEarn = ({resultOfUserCommunityReward}:{resultOfUserCommunityReward:any}) => {
    const classes = useStyles();

    const { address } = useAccount()
    const chainId = useChainId()

    // const TableList = [
    //     {
    //         id: 1,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Starter',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },
    //     {
    //         id: 2,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Silver',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },
    //     {
    //         id: 3,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Gold',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },
    //     {
    //         id: 4,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Platinum',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },
    //     {
    //         id: 5,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Daimond',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },
    //     {
    //         id: 6,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Elite',
    //         tri365d:'1000',
    //         tcr:'100',
    //         rr:'10'
    //     },

    // ];

    const resultOfUserCommunityRewardLength = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'totalCommunityRewardLengthForUser',
        args: [address as Address],
        account: zeroAddress
    })


    const resultOfUserCommunityRewardList = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'user2CommunityRewardInfoList',
        args: [address as Address, BigInt(0), Number(resultOfUserCommunityRewardLength?.data) > 0 ? resultOfUserCommunityRewardLength.data as bigint : BigInt(0)],
        account: zeroAddress
    })

    const { writeContractAsync,data,isPending:isPendingClaimForWrite } = useWriteContract()
    const {isLoading,isSuccess} = useWaitForTransactionReceipt({
        hash: data,
      }) 
    


    return (
        <Box>
            <TableContainer className={classes.tableContainer}>
            <Box className={classes.claimbtn__wrp}>
            <Button
                disabled={
                    (Number(resultOfUserCommunityReward?.amount)===0 || isPendingClaimForWrite || isLoading) ? true : false
                }
                className={classes.claimbtn}
                sx={{
                    opacity: !(
                        Number(resultOfUserCommunityReward?.amount)===0 || isPendingClaimForWrite || isLoading
                    ) ? "1" : '0.3'
                }}
                onClick={async () => {
                    await writeContractAsync({
                        abi: mmctStakingAbi,
                        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
                        functionName: 'claimCommunityRewards',
                        account: address
                    })
                }}
            >Claim All Rewards</Button>
        </Box>
                <Table sx={{ minWidth: 650, backgroundColor: '#080808', border: '1px solid #1D1D20', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#101012' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }}>From</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">Level</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">FCR <HoverTool Title={"From Claimed Reward"}/></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="left">FCT <HoverTool Title={"From Claimed Time"}/></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 16, color: '#fff' }} align="right">Reward</TableCell>
 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {
                        (resultOfUserCommunityRewardList?.data && resultOfUserCommunityRewardList?.data.length>0) ? (resultOfUserCommunityRewardList.data.map((item:any,index:number)=>(
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Image src={mmct} alt={"lol"} width={50} />
                                        <Typography>{shortenString(item.from as Address)}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{item.level.toString()}</Typography>

                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                <Typography color={'#fff'}>{convertToAbbreviated(formatEther?.(BigInt?.(item?.fromClaimedReward ? item.fromClaimedReward.toString() : 0)),4)} MMCT</Typography>
                                <Typography color={'#999'}>{formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item?.fromClaimedReward ? item.fromClaimedReward.toString() : 0))) * 0.05)}</Typography>
                                </TableCell>
                             
                                 
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                <Typography color={'#fff'}>{new Date(Number(item?.fromClaimedTime) * 1000).toLocaleString()}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right">
                                <Typography color={'#fff'}>{convertToAbbreviated(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0)),4)} MMCT</Typography>
                                <Typography color={'#999'}>{formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) * 0.05)}</Typography>
                                </TableCell>
                                
                               
                               
                            </TableRow>
                        )))
                        :(
                            <Box ml={30} className={classes.noData}>
                            <Typography color={'#fff'} margin={'auto'}>No Data Found!</Typography>
                        </Box>
                        )}
                            
                        

                    </TableBody>
                </Table>


            </TableContainer>
        </Box>
    );
}

export default TableCummunityEarn;
