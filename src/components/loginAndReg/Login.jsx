import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/login/user', {
            email,
            password
        }, { withCredentials: true }) // withCreditials is needed for JWT/Cookies
            // Displays validiations
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                else {
                    history.push("/dashboard")
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
        <h1 style={{ fontWeight: 'bold', marginTop: 10 }}>Motorsports Manager</h1>
            <Container component="main" maxWidth="xs" sx={{ mt: 2 }}>
                <Paper elevation={5} style={{ padding: 15, backgroundColor: "rgb(247 247 247 / 87%)" }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => setEmail(event.target.value)} value={email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => setPassword(event.target.value)} value={password}
                            />
                            <p className='text-danger'>{errors}</p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs sx={{ mr: 5 }}>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
export default Login;