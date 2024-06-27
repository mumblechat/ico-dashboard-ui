import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '40%' }} spacing={2}>
      <Alert sx={{backgroundColor:'#101012', border:'1px solid rgb(43 114 47)',color:'rgb(43 114 47)'}} severity="success">
        <AlertTitle>Success</AlertTitle>
        Successfully added network to your wallet.
      </Alert>
       
       
      <Alert sx={{backgroundColor:'#101012', border:'1px solid rgb(191 44 44)', color:'rgb(191 44 44)'}} severity="error">
        <AlertTitle>Error</AlertTitle>
        This is invalid network.
      </Alert>
    </Stack>
  );
}
