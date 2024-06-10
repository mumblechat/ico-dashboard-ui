'use client'


import Link from 'next/link'
import { Box, colors, styled, Typography } from '@mui/material'
import { usePathname } from 'next/navigation';
import ConnectWallet from './connectWallet';
import { useAccount } from 'wagmi';




const LinkStyled = styled(Link)(({ theme }) => ({
    color: '#fff',

    ':hover': {
        color: '#00FFFF'
    }

}));

const LoginStyled = styled(Link)(({ theme }) => ({
    backgroundColor: '#00FFFF !important',
  color: '#000 !important',
  padding: '14px 22px !important',
  display: 'inline-flex',
  textDecoration: 'none',
  fontWeight: '700 !important',
  borderRadius: '5rem !important',
  transition: '0.5s',
    ':hover': {
        transform: 'translateY(-5px)'
    },
     
}));

const ListBox = styled('ul')(({ theme }) => ({
    padding: 8,
    listStyle: 'none',
    display: 'inline-flex',
    gap: '0.5rem',
    backgroundColor: '#101012',
    border: '1px solid #1D1D20',
    borderRadius: '5rem',
    '@media(max-width : 1200px)': {
        display: 'inherit',
        backgroundColor: 'transparent',
        border: 'none'
    }

}));

const ListItem = styled('li')(({ theme }) => ({
    'a': {
        padding: '4px 14px',
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        borderRadius: '6px',
        width: 'max-content',
        '@media(max-width : 1200px)': {
            padding: '4px 10px',
            marginTop: '1rem'
        }
    }
}));

const BoxConnect = styled(Box)(({ theme }) => ({
    display: 'none',
    '@media(max-width : 600px)': {
        display: 'block',

    }
}));

const navLinks = [
    {
        name: 'Overview',
        href: '/'
    },
    {
        name: 'Validators',
        href: '/validators'
    },
    {
        name: 'Delegator',
        href: '/delegator'
    },
    {
        name: 'My Account',
        href: '/account'
    },
    {
        name: ' Earning Calculator',
        href: '/calculator'
    },
    {
        name: 'History',
        href: '/history'
    },
]

const Navbar = () => {
    const { address, isConnected } = useAccount()
    const pathname = usePathname()

    return (
        <Box>
            <ListBox>
                <ListItem>
                    <LinkStyled
                        href="/">
                        Home
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="#"
                    >
                        Feature
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="#"
                    >
                        ICO Chart
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="#"
                    >
                        Roadmap
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="#"
                    >
                        Calculator
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <LinkStyled
                        href="#"
                    >
                        Contact
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <BoxConnect>
                        {address &&
                            <LoginStyled
                                href={"/dashboard"}>
                                <Typography>Dashboard</Typography>
                            </LoginStyled>
                        }
                        <Box mt={2}/>
                        <ConnectWallet />
                    </BoxConnect>
                </ListItem>

            </ListBox>

        </Box>
    )
}
export default Navbar