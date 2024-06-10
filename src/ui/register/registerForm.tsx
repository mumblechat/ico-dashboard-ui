import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import google from '../../icons/google.png';
import facebook from '../../icons/facebook.png';

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
        borderRadius: '8px',
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
            color: '#fff !important'
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
    google_btn: {
        border: '1px solid #fff !important',
        color: '#fff !important',
        borderRadius: '30px !important',
        padding: '0.8rem',
        transition: '0.5s !important',
        '&:hover': {
            border: '1px solid #3DC1F2 !important',
            color: '#3DC1F2 !important'
        }
    }
});

const RegisterForm: React.FC = () => {
    const classes = useStyles();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError('Name, email, and password are required');
            return;
        }
        setError('');
        // Add your login logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Box className={classes.mainBox}>
                <Typography variant="h4">
                    Sign Up Xeco.
                </Typography>
                <Box>
                    <Box className={classes.login_top}>
                        <Typography color={'#999'}>Already have an account?</Typography>
                        <Link className={classes.create} href={'/login'}>Sign In</Link>
                    </Box>
                </Box>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} width={'100%'}>
                    <Typography>Your Name</Typography>
                    <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        placeholder='John Doe'
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />

                    <Typography>Your Email</Typography>
                    <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        placeholder='ramestta@gmail.com'
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />

                    <Typography>Password</Typography>
                    <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder='Min. 6 characters'
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    {error && (
                        <Typography color="error" variant="body2">
                            {error}
                        </Typography>
                    )}

                    <Box className={classes.remember}>
                        <FormControlLabel control={<Checkbox sx={{
                            color: '#fff',
                            '&.Mui-checked': {
                                color: '#fff',
                            },
                        }} defaultChecked />} label="Remember me" />
                        <Link href={'#'} className={classes.create}>Forgot Password?</Link>
                    </Box>
                    <Button endIcon={<KeyboardArrowRightIcon />}
                        className={classes.login__butn}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>

                    <Box className={classes.borderLine__wrap}>
                        <Box className={classes.borderLine} />
                        <Typography>or</Typography>
                        <Box className={classes.borderLine} />
                    </Box>

                    <Button startIcon={<Image src={google} alt={''} width={24} />}
                        className={classes.google_btn}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In with google
                    </Button>
                    <Button startIcon={<Image src={facebook} alt={''} width={24} />}
                        className={classes.google_btn}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 1, mb: 1 }}
                    >
                        Sign In with facebook
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterForm;
