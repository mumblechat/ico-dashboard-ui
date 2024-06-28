import React, { useState, useEffect } from 'react';
import { Stack, Alert, AlertTitle, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function DescriptionAlerts({isSucess,title,msg}:{isSucess:boolean,title:string,msg:string}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const successTimer = setTimeout(() => {
      setOpen(false);
    }, 5000); // 5 seconds

    return () => {
      clearTimeout(successTimer);
    };
  }, []);

  return (
    <Stack  sx={{ width: '100% !important', }} spacing={2}>
       <Collapse in={open}>
        <Alert
          sx={{ backgroundColor: '#101012', border:isSucess?"1px solid #23c552":"1px solid #f84f31", color: isSucess?'#23c552':'#f84f31'  }}
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
              <CloseIcon sx={{color: isSucess?'#23c552':'#f84f31'}} fontSize="inherit" />
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
