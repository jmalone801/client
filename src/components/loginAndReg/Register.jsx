import axios from 'axios';
import React, { useState } from 'react'
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



const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/register/user', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }, {withCredentials:true}) // withCreditials is needed for JWT/Cookies
            // Displays validiations
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                // Clears input fields
                else {
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPassword("")
                    setConfirmPassword("")
                    setErrors("")
                    history.push("/dashboard")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 style={{ fontWeight: 'bold', marginTop: 10 }}>Motorsports Manager</h1>
                <Container component="main" maxWidth="xs" sx={{ mt: 2 }}>
                    <Paper elevation={5} style={{padding: 15, backgroundColor: "rgb(247 247 247 / 87%)"}}>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Register
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            onChange={(event) => setFirstName(event.target.value)} value={firstName}
                                        />
                                        <p className='text-danger'>{errors.firstName ? errors.firstName.message : ""}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            onChange={(event) => setLastName(event.target.value)} value={lastName}
                                        />
                                        <p className='text-danger'>{errors.lastName ? errors.lastName.message : ""}</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={(event) => setEmail(event.target.value)} value={email}
                                        />
                                        <p className='text-danger'>{errors.email ? errors.email.message : ""}</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            onChange={(event) => setPassword(event.target.value)} value={password}
                                        />
                                        <p className='text-danger'>{errors.password ? errors.password.message : ""}</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="new-password"
                                            onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword}
                                        />
                                        <p className='text-danger'>{errors.confirmPassword ? errors.confirmPassword.message : ""}</p>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            Already have an account? Sign in
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
export default Register;