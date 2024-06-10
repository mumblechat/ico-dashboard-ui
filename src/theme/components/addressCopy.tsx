import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";

interface props {
    text: any;
    address: any;
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'space-between',
    borderRadius: '8px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#000',
    fontWeight: 500,
    fontSize:'17px !important',
    '@media(max-width : 1200px)':{
        fontSize:'14px !important',
    }
}));

const AddressCopy = ({ text, address,  }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <StyledBox>
                <StyledLink href={'#'}>
                    {address}
                </StyledLink>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: '#000', width: 18 }} />
                </Box>
                <Snackbar

                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                />
            </StyledBox>
        </>
    );
};

export default AddressCopy;