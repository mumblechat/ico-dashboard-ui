import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const useStyles = makeStyles({
    login_top: {
        display: 'flex',
        gap: '5px',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },
    create: {
        color: '#3DC1F2',
        textDecoration: 'none'
    },
    mainBox: {
        margin: '4rem auto auto auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#0f101e",
        padding: '2rem',
        borderRadius: '12px',
        width: '650px',
        '@media(max-width : 600px)': {
            width: '100%',
            padding: '0.8rem',
            margin: '2rem auto auto auto',
        }
    },
    input: {
        backgroundColor: '#ffffff12',
        padding: '10px 16px',
        borderRadius: '30px',
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
        },
    },
    login__butn: {
        backgroundColor: '#fff !important',
        color: '#000 !important',
        borderRadius: '30px !important',
        padding: '0.8rem',
        transition: '0.5s !important',
        '&:hover': {
            backgroundColor: '#3DC1F2 !important',
            color: '#fff !important',
            textAlign:'center'
        }
    },
    remember: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    borderLine: {
        width: '100%',
        height: '1px',
        backgroundColor: '#999'
    },
    borderLine__wrap: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center'
    },
    input__boc:{
        display:'flex',
        gap:'1rem',
        '@media(max-width : 600px)':{
            flexWrap:'wrap'
        }
    }
});

const ContactForm: React.FC = () => {
    const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
  
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="h4" component="h1" gutterBottom>
        Send a message
        </Typography>
       <Box className={classes.input__boc}>
       <TextField
        className={classes.input}
        placeholder='Enter your name'
        variant="standard"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputProps={{
            disableUnderline: true,
        }}
        />
        <TextField
          className={classes.input}
          placeholder='Enter your email'
          variant="standard"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputProps={{
            disableUnderline: true,
        }}
        />
       </Box>
        <Box className={classes.input__boc}>
        <TextField
         className={classes.input}
         placeholder='Mobile No'
         variant="standard"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputProps={{
            disableUnderline: true,
        }}
        />
        <TextField
           placeholder='Company'
         className={classes.input}
         variant="standard"
          name="company"
          value={formData.company}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            disableUnderline: true,
        }}
        />
        </Box>
        <TextField
           placeholder='Enter your message....'
          className={classes.input}
          variant="standard"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          InputProps={{
            disableUnderline: true,
        }}
        />
        <Box mt={2}>
       <Box sx={{
        '@media(max-width : 900px)':{
            textAlign:'center'
        }
       }}>
       <Button endIcon={<KeyboardArrowRightIcon />}
                        className={classes.login__butn}
                        type="submit"
                        
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                       Send Message
                    </Button>
       </Box>
        </Box>
      </Box>
     
  );
};

export default ContactForm;
