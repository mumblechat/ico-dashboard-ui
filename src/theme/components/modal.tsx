import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link';
import linkbtnimg from '../../icons/linkbtnimg.svg'
import Image from 'next/image';
import { Box, styled, Typography } from '@mui/material';
import Heading from './heading';
import close from '../../icons/close.svg'
import AddressReward from './addressReward';
import { useAccount } from 'wagmi';
import instagram from '../../icons/instagram.png'
import discord from '../../icons/discord.png'
import github from '../../icons/github.png'

import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceShareButton,
    XIcon,
} from "react-share";


const BoxSocial = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    padding:'0rem 2rem'
}));

export default function Modal() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { address } = useAccount();

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>


            <Link onClick={handleClickOpen('body')} href={"#"}><Image src={linkbtnimg} alt={""} /></Link>
            <Dialog
                sx={{
                    backgroundColor: '#0000008f',
                    '& .MuiDialog-paperScrollBody': {
                        backgroundColor: '#101012',
                        border: '1px solid #00FFFF',
                        padding: '2rem 0rem',
                        borderRadius: '12px'
                    }
                }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Box textAlign={'center'}>
                    <Link href={''} onClick={handleClose}><Image width={80} src={close} alt={''} /></Link>
                </Box>
                <DialogContent dividers={scroll === 'paper'}>
                    <Box textAlign={'center'}>
                        <Typography sx={{
                            '@media(max-width : 900px)': { fontSize: '16px' }
                        }} variant='h5' color={'#00FFFF'} fontFamily={'Bruce Forever!important'}>Earn more BDAG by referring your friends and community!</Typography>
                        <Typography mt={2} color={'#fff'}>Share your unique link below and receive <Typography component={'span'}><Link style={{ textDecoration: 'none', color: '#00FFFF' }} href={''}>10%</Link>  of all transactions realized with your link <Typography component={'span'}><Link style={{ textDecoration: 'none', color: '#00FFFF' }} href={''}>instantly </Link>!</Typography></Typography></Typography>
                    </Box>
                </DialogContent>
                <AddressReward text={address} address={"https://ico.dashboard.mumblechat.com/?ref=0x7..ae6"} />
                <BoxSocial>


                    <Link href={'https://x.com/mumblchat'} target='_blank'><XIcon size={32} round={true}/></Link>

                    <WhatsappShareButton
                        url="https://www.npmjs.com/package/react-copy-to-clipboard"
                    >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>

                    <Link href={'https://www.instagram.com/mumblechat/'} target='_blank'><Image src={instagram} alt={''} width={32}/></Link>

                    <FacebookShareButton
                        url="https://www.facebook.com/MumbleChat/"
                    >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>

                    <LinkedinShareButton
                        url="https://www.linkedin.com/company/mumblechat/about/"
                    >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>


                    <TelegramShareButton
                        url="https://t.me/mumblechat"
                    >
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>


                    <Link href={'/'} target='_blank'><Image src={discord} alt={''} width={32}/></Link>
                    <Link href={'/'} target='_blank'><Image src={github} alt={''} width={32}/></Link>
                    
                </BoxSocial>
            </Dialog>
        </React.Fragment>
    );
}