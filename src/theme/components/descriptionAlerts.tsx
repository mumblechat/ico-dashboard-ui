import React, { useState, useEffect } from 'react';
import { Stack, Alert, AlertTitle, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function DescriptionAlerts({isSucess,title,msg}:{isSucess:boolean,title:string,msg:string}) {
  const [open, setOpen] = useState(true);
  // const [errorOpen, setErrorOpen] = useState(true);

  useEffect(() => {
    const successTimer = setTimeout(() => {
      setOpen(false);
    }, 5000); // 5 seconds

    return () => {
      clearTimeout(successTimer);
    };
  }, []);

  return (
    <Stack  sx={{ width: '40%' }} spacing={2}>
       <Collapse in={open}>
        <Alert
          sx={{ backgroundColor: '#101012', border: `${isSucess}?'1px solid rgb(43 114 47)':'1px solid rgb(191 44 44)'`, color: `${isSucess}?'rgb(43 114 47)':'rgb(191 44 44)'`  }}
          severity={isSucess?'success':"error"}
          action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
            <AlertTitle>{title}</AlertTitle>
          {msg}
        </Alert>
        </Collapse>
    </Stack>
  );
}
